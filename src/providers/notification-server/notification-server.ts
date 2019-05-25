import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {EventSourcePolyfill} from 'event-source-polyfill';

/*
  Generated class for the NotificationServerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NotificationServerProvider {

 /* -------------------------------------------------------------------------------------------------------------- */
 private serviceURL = 'http://localhost:8585/persona';

 private httpHeaders = new HttpHeaders({
   'Content-Type': 'application/json',
   'Accept': 'application/json'
 });

 /* -------------------------------------------------------------------------------------------------------------- */

 constructor(private httpClient: HttpClient) {
 }

 /* -------------------------------------------------------------------------------------------------------------- */

 /**
  * Servicio que permite la conexion hacia el servicio reactivo, dicha funcion retorna
  */
 public getPersonaNotification(): Observable<any> {

   // creando un observable ... que este conectado mediante un "EventSource"
   return Observable.create((observer) => {

     const url: any = this.serviceURL + '/notification/sse';

     // definiendo conexion de event source ... asi como los eventos que estara escuchando
     var eventSource = new EventSourcePolyfill(url,
       {
         heartbeatTimeout: 30000,
         connectionTimeout: 60000
       }
     );
     // verificar los "event" definidos para los flujos en el server
     eventSource.addEventListener('persona-result', function (event: any) {
       observer.next(event.data);
     });

     // verificar los "event" definidos para los flujos en el server
     eventSource.addEventListener('heartbeat-result', function (event) {
       console.log('eventSource.addEventListener: on heartbeat....');
     });

     return () => eventSource.close();
   });
 }

 /* -------------------------------------------------------------------------------------------------------------- */

}
