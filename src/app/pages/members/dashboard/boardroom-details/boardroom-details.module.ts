import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BoardroomDetailsPageRoutingModule } from './boardroom-details-routing.module';

import { BoardroomDetailsPage } from './boardroom-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BoardroomDetailsPageRoutingModule
  ],
  declarations: [BoardroomDetailsPage]
})
export class BoardroomDetailsPageModule {}
