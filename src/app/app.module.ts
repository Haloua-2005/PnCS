import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { BeauxArtsComponent } from './beaux-arts/beaux-arts.component';
import { GraphicArtComponent } from './graphic-art/graphic-art.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { LogInComponent } from './log-in/log-in.component';
import { from } from 'rxjs';
import { AcrylicsComponent } from './acrylics/acrylics.component';
import { HuilesComponent } from './huiles/huiles.component';
import { ToilesComponent } from './toiles/toiles.component';
import { CommandComponent } from './command/command.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AcceuilComponent,
    BeauxArtsComponent,
    GraphicArtComponent,
    SignInComponent,
    LogInComponent,
    AcrylicsComponent,
    HuilesComponent,
    ToilesComponent,
    CommandComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
