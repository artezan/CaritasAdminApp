import { Injectable } from '@angular/core';
import { AngularFireDatabase  } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
@Injectable()
export class Provider {

  constructor(public afd: AngularFireDatabase ) {
    console.log('Hello Provider Provider');
  }
  public ArticulosDar(): Observable<any> {
 return  this.afd.list('articulos/articulosdar').snapshotChanges().map(actions => {
    return actions.map(action => ({ key: action.key, ...action.payload.val() }));
  })
  }
   public ArticulosRecibir(): Observable<any> {
 return  this.afd.list('articulos/articulosrecibir').snapshotChanges().map(actions => {
    return actions.map(action => ({ key: action.key, ...action.payload.val() }));
  })
  }

}
