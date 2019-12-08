import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { CompileShallowModuleMetadata } from '@angular/compiler';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})

export class AccountPage implements OnInit {

  constructor(private authService: AuthService) { }
  user = null;

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.user = this.authService.getUser();
  }

  logout() {
    this.authService.logout();
  }
}
