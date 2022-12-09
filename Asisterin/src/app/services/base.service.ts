import { Injectable } from '@angular/core';
import { SQLiteObject } from '@awesome-cordova-plugins/sqlite';
import { AlertController, Platform } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { Usuarios } from './usuarios';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  usuario: string ="CREATE TABLE IF NOT EXISTS usuario(id_usuario INTEGER PRIMARY KEY autoincrement, nombre VARCHAR(50) NOT NULL, clave VARCHAR(50) NOT NULL,  id_rol INTEGER NOT NULL, imagen BLOB, nombre_r VARCHAR(50), telefono INTEGER, correo VARCHAR(50), direccion VARCHAR(50));";

  public database: SQLiteObject;



  listaUsuarios = new BehaviorSubject([]);


  
  private isDBReady: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(private sqlite: SQLite, private platform: Platform, private alertController: AlertController) { 

  }


  async presentAlert(msj: string) {
    const alert = await this.alertController.create({
      header: 'Importante',
      message: msj,
      buttons: ['OK'],
    });

    await alert.present();
  }

  crearBD() {
    //verificamos que la plataforma este lista
    this.platform.ready().then(() => {
      //creamos la BD
      this.sqlite.create({
        name: 'bdasist1.db',
        location: 'default'
      }).then((db: SQLiteObject) => {
        this.database = db;
        //llamar a la funcion para crear las tablas
        this.crearTablas();
      }).catch(e => {
        this.presentAlert("Error creación BD: " + e);
      })
    })
  }

  async crearTablas() {
    try {
      //ejecuto creacion de tablas
      await this.database.executeSql(this.usuario, []);
    

      //llamo al observable de carga de datos
      this.buscarUsuarios();
      
      //modificar el observable de el status de la BD
      this.isDBReady.next(true);

    } catch (e) {
      this.presentAlert("Error creación Tabla: " + e);
    }
  }

  dbState() {
    return this.isDBReady.asObservable();
  }

  fetchUsuarios(): Observable<Usuarios[]> {
    return this.listaUsuarios.asObservable();
  }
  






}
