import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { BoardroomPageRoutingModule } from './boardroom-routing.module';
import { BoardroomPage } from './boardroom.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    BoardroomPageRoutingModule
  ],
  declarations: [BoardroomPage]
})
export class BoardroomPageModule {}
