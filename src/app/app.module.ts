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
import { environment } from './env';
import { WelcomeComponent } from './welcome/welcome.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { VarifyEmailComponent } from './varify-email/varify-email.component';

@NgModule({
  declarations: [
    AppComponent,
    SzabalyComponent,
    VizsgalatComponent,
    BelepesComponent,
    RegisztalComponent,
    AudiogramComponent,
    HomeComponent,
    WelcomeComponent,
    ForgotPasswordComponent,
    VarifyEmailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
