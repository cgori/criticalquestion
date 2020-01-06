import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {

  user = null;
  pages = [];

  getUser() {
    this.user = this.authService.getUser();
  }
  ionViewWillEnter(){
    if (this.isChairman()) {
      this.pages = [
        {
          title: 'Dashboard',
          url: '/members/pages/dashboard'
        },
        {
          title: 'Account',
          url: '/members/pages/account'
        },
        {
          title: 'Create Boardroom',
          url: '/members/pages/boardroom'
        },
        {
          title: 'Accounts',
          url: '/members/pages/accounts'
        }
      ];
    } else {
      this.pages = [
        {
          title: 'Dashboard',
          url: '/members/pages/dashboard'
        },
        {
          title: 'Account',
          url: '/members/pages/account'
        }
      ];
    }
  }

  isChairman() {
    this.getUser();
    if (this.user.user.role === 'chairman'){
      return true;
    } else {
      return false;
    }
  }


  constructor(private authService: AuthService) {
   }

  ngOnInit() {
  }

}
