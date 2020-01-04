import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BoardroomDetailsPage } from './boardroom-details.page';

const routes: Routes = [
  {
    path: '',
    component: BoardroomDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BoardroomDetailsPageRoutingModule {}
