import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
 
@Component({
  selector: 'app-tab2',
  templateUrl: 'account.page.html',
  styleUrls: ['account.page.scss']
})
export class Tab1Page {
  user = null;
 
  constructor(private auth: AuthService) {}
 
  ionViewWillEnter() {
    this.user = this.auth.getUser();
  }
 
  logout() {
    this.auth.logout();
  }
}