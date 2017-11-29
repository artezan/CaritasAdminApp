import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ArticuloNuevoPage } from './articulo-nuevo';

@NgModule({
  declarations: [
    ArticuloNuevoPage,
  ],
  imports: [
    IonicPageModule.forChild(ArticuloNuevoPage),
  ],
})
export class ArticuloNuevoPageModule {}
