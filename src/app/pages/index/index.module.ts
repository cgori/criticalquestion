import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IndexPageRoutingModule } from './index-routing.module';

import { IndexPage } from './index.page';

import { LoginComponent } from './login/login.component';

import { RegisterComponent} from './register/register.component'
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IndexPageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [IndexPage, LoginComponent, RegisterComponent]
})
export class IndexPageModule {}
