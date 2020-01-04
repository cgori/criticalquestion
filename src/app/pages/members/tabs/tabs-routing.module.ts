import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';
import { AdminAuthGuardService } from '../adminService/auth-guard.service';

const routes: Routes = [
  {
    path: 'pages',
    component: TabsPage,
    children: [
      {
        path: 'account',
        loadChildren: '../account/account.module#AccountPageModule'
      },
      {
        path: 'dashboard',
        loadChildren: '../dashboard/dashboard.module#DashboardPageModule'
      },
      {
        path: 'accounts',
        loadChildren: '../admin/accounts/accounts.module#AccountsPageModule',
        canActivate: [AdminAuthGuardService]
      },
      {
        path: 'boardroom',
        loadChildren: '../admin/boardroom/boardroom.module#BoardroomPageModule',
        canActivate: [AdminAuthGuardService]
      },
      {
        path: 'poll',
        loadChildren: '../admin/poll/poll.module#PollPageModule',
        canActivate: [AdminAuthGuardService]      }
    ]
  },
  {
    path: '',
    redirectTo: 'pages/dashboard',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}