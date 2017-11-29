import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireDatabase  } from 'angularfire2/database';
import {Provider} from  '../../providers/provider/provider'
import {ArticuloNuevoPage} from  '../articulo-nuevo/articulo-nuevo';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	estado;
	articulos_d;
	articulos_r;

  constructor(public navCtrl: NavController, public afd: AngularFireDatabase,public provider: Provider) {
  	this.estado= 'recibir'
  this.obtener();
  this.obtener1();
  }
  obtenerfirebase(){
    
 
  }
  addItem() {

    this.afd.list('/articulos/').push(
    {
      nombre:'',
      visitas:0,
      estado:'recibir',
      categoria:'Medicina',
      cantidad:1,
      link: 'https://firebasestorage.googleapis.com/v0/b/ionic-186307.appspot.com/o/imagenes%2Fmedicamentoquimioterapia.jpg?alt=media&token=be01368b-beaa-43bc-bc0d-9148b087a61f'
    });
  }
    removeItem(id) {
    this.afd.list('/shoppingItems/').remove(id);
  }
  updateItem(key) {
    this.afd.list('/shoppingItems/').update(key,{nombre:'this.newItem'});
  }
  obtener(){
     this.provider.ArticulosDar().subscribe(items => {
     	console.log(items)
     	this.articulos_d=items;
           
  });  
  }
  obtener1(){
     this.provider.ArticulosRecibir().subscribe(items => {
     	console.log(items)
     	this.articulos_r=items
         
  });  
  }
  nuevo(){
  	this.navCtrl.push(ArticuloNuevoPage)
  }
    removeItemRecibir(id) {
    this.afd.list('/articulos/articulosrecibir').remove(id);
}
removeItemDar(id) {
    this.afd.list('/articulos/articulosdar').remove(id);

}

}
