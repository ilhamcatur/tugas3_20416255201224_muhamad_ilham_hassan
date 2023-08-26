
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { ButtonComponent } from './button.component';


@NgModule({
imports: [
    CommonModule,
    FormsModule,
    IonicModule,
],
declarations: [ButtonComponent],
schemas: [CUSTOM_ELEMENTS_SCHEMA],
exports: [ButtonComponent]
})
export class ButtonModule {}