import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SzabalyComponent } from './szabaly/szabaly.component';
import { VizsgalatComponent } from './vizsgalat/vizsgalat.component';
import { BelepesComponent } from './belepes/belepes.component';
import { RegisztalComponent } from './regisztal/regisztal.component';
import { FormsModule } from '@angular/forms';
import { AudiogramComponent } from './audiogram/audiogram.component';
import { HomeComponent } from './home/home.component';
import { Environment } from './environment';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { VarifyEmailComponent } from './varify-email/varify-email.component';
import { AuthService } from './auth.service';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { HttpClientModule } from '@angular/common/http';
import { UserListComponent } from './user-list/user-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SzabalyComponent,
    VizsgalatComponent,
    BelepesComponent,
    RegisztalComponent,
    AudiogramComponent,
    HomeComponent,
    ForgotPasswordComponent,
    VarifyEmailComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    AngularFireModule.initializeApp(Environment.firebase),
    AngularFireAuthModule,
    SweetAlert2Module,
    HttpClientModule
  ],
  providers: [AuthService, RegisztalComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
