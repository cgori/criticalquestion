import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuardService implements CanActivate {
  user = null;
  constructor(private authService: AuthService) {}
  canActivate(): boolean {
    return this.isAuthenticated();
  }
  ionViewWillEnter() {
    this.user = this.authService.getUser();
  }

  isAuthenticated() {
    this.ionViewWillEnter();
    if(this.isChairman()) {
      return true;
    } else {
      return false;
    }
  }



  isChairman() {
    if (this.user.user.role === 'chairman'){
      return true;
    } else {
      return false;
    }
  }
}