import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { ProviderPersonaProvider } from '../../providers/provider-persona/provider-persona';
import { NotificationServerProvider } from '../../providers/notification-server/notification-server';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs';
import { jsonpCallbackContext } from '@angular/common/http/src/module';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public mySubject: BehaviorSubject<any>;
  public mySubject2: BehaviorSubject<any>;

  persona={"id":null,"primerNombre":"","segundoNombre":"","edad":''};
  personas;
  
  constructor(public navCtrl: NavController, public PersonaService: ProviderPersonaProvider,
   public notificationService: NotificationServerProvider,
   public alertaController: AlertController
  ) {
    this.mySubject=new BehaviorSubject(null);
    this.mySubject2=new BehaviorSubject(null);
  }
  ngOnInit(): void {

    console.log('on init');

    this.mySubject.subscribe((result)=> {
      this.procesarSubject(result)
    })
    
    // realizar suscripcion
    this.doNotificationSubscription();

    // ejecutar llamada de servicio restful al iniciar la aplicacion
    this.PersonaService
      .personaList(null)
      .subscribe((result) => { this.personas = result
      });
      
  }
  ngOnDestroy(): void {
    console.log('on destroy');
  }
   /* ------------------------------------------------------------------------------------------------- */
   public doNotificationSubscription(): void {
    try {
      this.notificationService.getPersonaNotification().subscribe((result) => {
        this.handleMessageReceived(result); 
      });
    } catch (e) {
      console.log(e);
    }
  }

  /* ------------------------------------------------------------------------------------------------- */
  private handleMessageReceived(message: any): void {
    console.log('Mensaje recibido:' + JSON.stringify(message));
    this.mySubject.next(JSON.parse(message));
  }

  /* ------------------------------------------------------------------------------------------------- */
  public Edit(): void {

    let datoEnviar ={"id":this.persona.id,"primerNombre":this.persona.primerNombre,
    "segundoNombre":this.persona.segundoNombre,"edad":this.persona.edad};

      if (this.personas[datoEnviar.id] === undefined ){
        const alert = this.alertaController.create(
          {
          title: 'Error al Editar',
          subTitle: 'El cogido ingresado no Existe',
          buttons: ['OK']
          });
        alert.present();
      }else{

        console.log('Datos a enviar:' + JSON.stringify(datoEnviar));

        this.PersonaService.update(datoEnviar).subscribe(result => {
        console.log('Datos from server:' + JSON.stringify(result));
        });
      }
  }
   /* ------------------------------------------------------------------------------------------------- */
   public Envio(): void {
    let datoEnviar ={"id":this.personas.length,"primerNombre":this.persona.primerNombre,
    "segundoNombre":this.persona.segundoNombre,"edad":this.persona.edad};
    console.log(this.personas.length);
      if (datoEnviar.primerNombre !== '' && datoEnviar.segundoNombre !== '' && datoEnviar.edad !== '' ){
      
        console.log('Datos a enviar:' + JSON.stringify(datoEnviar));
        this.PersonaService.create(datoEnviar).subscribe(result => {
        console.log('Datos from server:' + JSON.stringify(result));
        });
      }else {
        const alert = this.alertaController.create(
          {
          title: 'Error al Guardar',
          subTitle: 'Datos Incompletos',
          buttons: ['OK']
          });
        alert.present();
      }
    }
   /* ------------------------------------------------------------------------------------------------- */
   public procesarSubject (result: any): void {
    if (result == null) return;
    this.personas[result.id]=result;
  }
  
}
