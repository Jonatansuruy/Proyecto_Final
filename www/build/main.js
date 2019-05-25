webpackJsonp([0],{

/***/ 160:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 160;

/***/ }),

/***/ 204:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 204;

/***/ }),

/***/ 250:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_provider_persona_provider_persona__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_notification_server_notification_server__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, PersonaService, notificationService, alertaController) {
        this.navCtrl = navCtrl;
        this.PersonaService = PersonaService;
        this.notificationService = notificationService;
        this.alertaController = alertaController;
        this.persona = { "id": null, "primerNombre": "", "segundoNombre": "", "edad": '' };
        this.mySubject = new __WEBPACK_IMPORTED_MODULE_4_rxjs__["BehaviorSubject"](null);
        this.mySubject2 = new __WEBPACK_IMPORTED_MODULE_4_rxjs__["BehaviorSubject"](null);
    }
    HomePage.prototype.ngOnInit = function () {
        var _this = this;
        console.log('on init');
        this.mySubject.subscribe(function (result) {
            _this.procesarSubject(result);
        });
        // realizar suscripcion
        this.doNotificationSubscription();
        // ejecutar llamada de servicio restful al iniciar la aplicacion
        this.PersonaService
            .personaList(null)
            .subscribe(function (result) {
            _this.personas = result;
        });
    };
    HomePage.prototype.ngOnDestroy = function () {
        console.log('on destroy');
    };
    /* ------------------------------------------------------------------------------------------------- */
    HomePage.prototype.doNotificationSubscription = function () {
        var _this = this;
        try {
            this.notificationService.getPersonaNotification().subscribe(function (result) {
                _this.handleMessageReceived(result);
            });
        }
        catch (e) {
            console.log(e);
        }
    };
    /* ------------------------------------------------------------------------------------------------- */
    HomePage.prototype.handleMessageReceived = function (message) {
        console.log('Mensaje recibido:' + JSON.stringify(message));
        this.mySubject.next(JSON.parse(message));
    };
    /* ------------------------------------------------------------------------------------------------- */
    HomePage.prototype.Edit = function () {
        var datoEnviar = { "id": this.persona.id, "primerNombre": this.persona.primerNombre,
            "segundoNombre": this.persona.segundoNombre, "edad": this.persona.edad };
        if (this.personas[datoEnviar.id] === undefined) {
            var alert = this.alertaController.create({
                title: 'Error al Editar',
                subTitle: 'El cogido ingresado no Existe',
                buttons: ['OK']
            });
            alert.present();
        }
        else {
            console.log('Datos a enviar:' + JSON.stringify(datoEnviar));
            this.PersonaService.update(datoEnviar).subscribe(function (result) {
                console.log('Datos from server:' + JSON.stringify(result));
            });
        }
    };
    /* ------------------------------------------------------------------------------------------------- */
    HomePage.prototype.Envio = function () {
        var datoEnviar = { "id": this.personas.length, "primerNombre": this.persona.primerNombre,
            "segundoNombre": this.persona.segundoNombre, "edad": this.persona.edad };
        console.log(this.personas.length);
        if (datoEnviar.primerNombre !== '' && datoEnviar.segundoNombre !== '' && datoEnviar.edad !== '') {
            console.log('Datos a enviar:' + JSON.stringify(datoEnviar));
            this.PersonaService.create(datoEnviar).subscribe(function (result) {
                console.log('Datos from server:' + JSON.stringify(result));
            });
        }
        else {
            var alert = this.alertaController.create({
                title: 'Error al Guardar',
                subTitle: 'Datos Incompletos',
                buttons: ['OK']
            });
            alert.present();
        }
    };
    /* ------------------------------------------------------------------------------------------------- */
    HomePage.prototype.procesarSubject = function (result) {
        if (result == null)
            return;
        this.personas[result.id] = result;
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\practice\Documents\Ionic Projects\IonicReactivo\src\pages\home\home.html"*/'<div style="align-content: center" >\n  <label>nombre:</label>\n  <input type="text" [(ngModel)]=\'persona.primerNombre\'/>\n  <br>\n  <label>apellido:</label>\n  <input type="text" [(ngModel)]=\'persona.segundoNombre\'/>\n  <br>\n  <label>edad</label>\n  <input type="text" [(ngModel)]="persona.edad"/>\n  <br>\n  <button (click)="Envio()">\n    agregar\n  </button>\n  <button (click)="Edit()">editar </button>\n  <br>\n  <label>ID a editar:</label>\n  <input type="number" [(ngModel)]="persona.id"/>\n</div>\n<div style="width:500px; height:600px; padding: 1px; background-color:transparent;\n align-content: center;overflow: auto">\n  <div style="text-align:center;float:left;width:10%;height:50px;border:1px solid black;">\n    <h1>Id</h1>\n    <h3 *ngFor="let personas of personas">{{personas.id}} </h3>\n  </div>\n  <div style="text-align:center;float:left;width:20%;height:50px;border:1px solid black;">\n    <h1>Nombre</h1>\n    <h3 *ngFor="let personas of personas">{{personas.primerNombre}} </h3>\n  </div>\n  <div style="text-align:center; float:left;width:20%;height:50px;border:1px solid black;">\n    <h1>Apellido</h1>\n    <h3 *ngFor="let personas of personas">{{personas.segundoNombre}} </h3>\n  </div>\n  <div style="text-align:center; float:left;width:20%;height:50px;border:1px solid black;">\n    <h1>Edad</h1>\n    <h3 *ngFor="let personas of personas">{{personas.edad}} </h3>\n  </div>\n</div>\n\n'/*ion-inline-end:"C:\Users\practice\Documents\Ionic Projects\IonicReactivo\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__providers_provider_persona_provider_persona__["a" /* ProviderPersonaProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_provider_persona_provider_persona__["a" /* ProviderPersonaProvider */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__providers_notification_server_notification_server__["a" /* NotificationServerProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_notification_server_notification_server__["a" /* NotificationServerProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _d || Object])
    ], HomePage);
    return HomePage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 251:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProviderPersonaProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the ProviderPersonaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ProviderPersonaProvider = /** @class */ (function () {
    /* -------------------------------------------------------------------------------------------------------------- */
    function ProviderPersonaProvider(httpClient) {
        this.httpClient = httpClient;
        /* -------------------------------------------------------------------------------------------------------------- */
        this.serviceURL = 'http://192.168.0.195:8585/persona';
        this.httpHeaders = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        });
        console.log('Hello ProviderPersonaProvider Provider');
    }
    /* -------------------------------------------------------------------------------------------------------------- */
    ProviderPersonaProvider.prototype.personaList = function (params) {
        var url = this.serviceURL + '/all';
        return this.httpClient
            .get(url, { headers: this.httpHeaders, params: params });
    };
    /* -------------------------------------------------------------------------------------------------------------- */
    /**
     * Servicio de envio de POST
     * @param model
     */
    ProviderPersonaProvider.prototype.create = function (model) {
        var url = this.serviceURL + "/create";
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/json'
        });
        return this.httpClient
            .post(url, JSON.stringify(model), { headers: headers });
    };
    /**
       * Servicio de envio de PUT
       * @param model
       */
    ProviderPersonaProvider.prototype.update = function (model) {
        var url = this.serviceURL + "/update";
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/json'
        });
        return this.httpClient
            .put(url, JSON.stringify(model), { headers: headers });
    };
    ProviderPersonaProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
    ], ProviderPersonaProvider);
    return ProviderPersonaProvider;
    var _a;
}());

//# sourceMappingURL=provider-persona.js.map

/***/ }),

/***/ 254:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationServerProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_event_source_polyfill__ = __webpack_require__(393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_event_source_polyfill___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_event_source_polyfill__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the NotificationServerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var NotificationServerProvider = /** @class */ (function () {
    /* -------------------------------------------------------------------------------------------------------------- */
    function NotificationServerProvider(httpClient) {
        this.httpClient = httpClient;
        /* -------------------------------------------------------------------------------------------------------------- */
        this.serviceURL = 'http://localhost:8585/persona';
        this.httpHeaders = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        });
    }
    /* -------------------------------------------------------------------------------------------------------------- */
    /**
     * Servicio que permite la conexion hacia el servicio reactivo, dicha funcion retorna
     */
    NotificationServerProvider.prototype.getPersonaNotification = function () {
        var _this = this;
        // creando un observable ... que este conectado mediante un "EventSource"
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].create(function (observer) {
            var url = _this.serviceURL + '/notification/sse';
            // definiendo conexion de event source ... asi como los eventos que estara escuchando
            var eventSource = new __WEBPACK_IMPORTED_MODULE_3_event_source_polyfill__["EventSourcePolyfill"](url, {
                heartbeatTimeout: 30000,
                connectionTimeout: 60000
            });
            // verificar los "event" definidos para los flujos en el server
            eventSource.addEventListener('persona-result', function (event) {
                observer.next(event.data);
            });
            // verificar los "event" definidos para los flujos en el server
            eventSource.addEventListener('heartbeat-result', function (event) {
                console.log('eventSource.addEventListener: on heartbeat....');
            });
            return function () { return eventSource.close(); };
        });
    };
    NotificationServerProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], NotificationServerProvider);
    return NotificationServerProvider;
}());

//# sourceMappingURL=notification-server.js.map

/***/ }),

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(350);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_provider_persona_provider_persona__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_notification_server_notification_server__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common_http__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_forms__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_9__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_forms__["d" /* ReactiveFormsModule */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_7__providers_provider_persona_provider_persona__["a" /* ProviderPersonaProvider */],
                __WEBPACK_IMPORTED_MODULE_8__providers_notification_server_notification_server__["a" /* NotificationServerProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 392:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(250);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\practice\Documents\Ionic Projects\IonicReactivo\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\practice\Documents\Ionic Projects\IonicReactivo\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[345]);
//# sourceMappingURL=main.js.map