import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase  } from 'angularfire2/database';

/**
 * Generated class for the ArticuloNuevoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-articulo-nuevo',
  templateUrl: 'articulo-nuevo.html',
})
export class ArticuloNuevoPage {
	estado; 
	categoria;
	des;
	foto;
	visitas=0;
	tipo= [];
	nombre;
	cantidad;

  constructor(public navCtrl: NavController, public navParams: NavParams,public afd: AngularFireDatabase) {
  	this.tipo =[{estado:'Dar'},{estado:'Recibir'}];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ArticuloNuevoPage');
  }
  agregar(){
  	var str = String(this.estado).toLowerCase();
  	console.log(str)
    this.afd.list('/articulos/articulos'+str).push(
    {
      nombre:this.nombre,
      visitas:0,
      estado:str,
      categoria:this.categoria,
      cantidad:this.cantidad,
      link: '',
      des:this.des
    });
  }


}
