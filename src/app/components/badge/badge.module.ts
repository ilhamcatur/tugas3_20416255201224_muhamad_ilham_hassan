import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { BadgeComponent } from './badge.component';


@NgModule({
imports: [
    CommonModule,
    FormsModule,
    IonicModule,
],
declarations: [BadgeComponent],
schemas: [CUSTOM_ELEMENTS_SCHEMA],
exports: [BadgeComponent]
})

export class BadgeModule {}