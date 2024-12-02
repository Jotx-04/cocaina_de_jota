import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { CreateProductCommand } from '../../application/commands/create-product.command';
import { DeleteProductCommand } from '../../application/commands/delete-product.command';
import { UpdateProductCommand } from '../../application/commands/update-product.command';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage],
  providers: [CreateProductCommand, DeleteProductCommand, UpdateProductCommand]
})
export class HomePageModule {}
