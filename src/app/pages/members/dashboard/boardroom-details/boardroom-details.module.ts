import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { BoardroomDetailsPageRoutingModule } from './boardroom-details-routing.module';
import { BoardroomDetailsPage } from './boardroom-details.page';
import { CreatePollComponent} from './create-poll/create-poll.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BoardroomDetailsPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [BoardroomDetailsPage, CreatePollComponent]
})
export class BoardroomDetailsPageModule {}
