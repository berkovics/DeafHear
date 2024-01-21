import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SzabalyComponent } from './szabaly/szabaly.component';
import { VizsgalatComponent } from './vizsgalat/vizsgalat.component';
import { BelepesComponent } from './belepes/belepes.component';
import { RegisztalComponent } from './regisztal/regisztal.component';
import { FormsModule } from '@angular/forms';
import { AudiogramComponent } from './audiogram/audiogram.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'szabaly', component: SzabalyComponent},
  {path: 'vizsgalat', component: VizsgalatComponent},
  {path: 'belepes', component: BelepesComponent},
  {path: 'regisztal', component: RegisztalComponent},
  {path: 'audiogram', component: AudiogramComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    SzabalyComponent,
    VizsgalatComponent,
    BelepesComponent,
    RegisztalComponent,
    AudiogramComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
