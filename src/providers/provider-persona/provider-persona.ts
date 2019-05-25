import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the ProviderPersonaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProviderPersonaProvider {
   /* -------------------------------------------------------------------------------------------------------------- */
   private serviceURL = 'http://192.168.0.195:8585/persona';

   private httpHeaders = new HttpHeaders({
     'Content-Type': 'application/json',
     'Accept': 'application/json'
   });
 
   /* -------------------------------------------------------------------------------------------------------------- */
 
  constructor(public httpClient: HttpClient) {
    console.log('Hello ProviderPersonaProvider Provider');
  }
   
   
    /* -------------------------------------------------------------------------------------------------------------- */
  
    public personaList(params: any): Observable<any> {
      let url: string = this.serviceURL + '/all';
  
      return this.httpClient
        .get(url, {headers: this.httpHeaders, params: params});
    }
  
    /* -------------------------------------------------------------------------------------------------------------- */
  
    /**
     * Servicio de envio de POST
     * @param model
     */
    public create(model: any): Observable<any> {
      let url: string = this.serviceURL + "/create";
      let headers: any = new HttpHeaders({
        'Content-Type': 'application/json'
      });
      return this.httpClient
        .post(url, JSON.stringify(model), {headers: headers});
    }
  /**
     * Servicio de envio de PUT
     * @param model
     */
    public update(model: any): Observable<any> {
      let url: string = this.serviceURL + "/update";
      let headers: any = new HttpHeaders({
        'Content-Type': 'application/json'
      });
      return this.httpClient
        .put(url, JSON.stringify(model), {headers: headers});
    }
  
    /* -------------------------------------------------------------------------------------------------------------- */
  }
  
