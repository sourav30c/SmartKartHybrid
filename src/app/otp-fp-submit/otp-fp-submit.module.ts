import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { OtpFpSubmitPage } from './otp-fp-submit.page';

const routes: Routes = [
  {
    path: '',
    component: OtpFpSubmitPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [OtpFpSubmitPage]
})
export class OtpFpSubmitPageModule {}
