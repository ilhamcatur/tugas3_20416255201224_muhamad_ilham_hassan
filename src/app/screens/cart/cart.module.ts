import { NgModule, CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CartPageRoutingModule } from './cart-routing.module';

import { CartPage } from './cart.page';
import { CartItemModule } from 'src/app/components/cart-item/cart-item.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CartPageRoutingModule,
    CartItemModule
  ],
  declarations: [CartPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CartPageModule {}
