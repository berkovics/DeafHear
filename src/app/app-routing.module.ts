import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SzabalyComponent } from './szabaly/szabaly.component';
import { VizsgalatComponent } from './vizsgalat/vizsgalat.component';
import { BelepesComponent } from './belepes/belepes.component';
import { RegisztalComponent } from './regisztal/regisztal.component';
import { AudiogramComponent } from './audiogram/audiogram.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { VarifyEmailComponent } from './varify-email/varify-email.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'szabaly', component: SzabalyComponent},
  {path: 'vizsgalat', component: VizsgalatComponent},
  {path: 'belepes', component: BelepesComponent},
  {path: 'regisztal', component: RegisztalComponent},
  {path: 'audiogram', component: AudiogramComponent},
  {path: 'welcome', component: WelcomeComponent},
  {path: 'forgot-password', component: ForgotPasswordComponent},
  {path: 'varify-email', component: VarifyEmailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
