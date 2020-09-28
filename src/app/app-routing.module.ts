import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { BeauxArtsComponent } from './beaux-arts/beaux-arts.component';
import { GraphicArtComponent } from './graphic-art/graphic-art.component';
import { LogInComponent } from './log-in/log-in.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { LogoutGuard } from './Guards/logout.guard';
import { CommandComponent } from './command/command.component';
import { AcrylicsComponent } from './acrylics/acrylics.component';
import { HuilesComponent } from './huiles/huiles.component';
import { ToilesComponent } from './toiles/toiles.component';
import { LogInGuard } from './Guards/log-in.guard';


const routes: Routes = [
  { path : 'home', component:AcceuilComponent },
  { path : 'BA', component:BeauxArtsComponent, children:[
    { path : 'acrylic', component:AcrylicsComponent },
    { path : 'huile', component:HuilesComponent },
    { path : 'toile', component:ToilesComponent },
  ]},
  { path : 'GA', component:GraphicArtComponent, children:[] },
  { path : 'login', component:LogInComponent, canActivate:[LogInGuard], children:[
    { path : 'signin', component:SignInComponent }
  ]},
  { path : 'buy', component:CommandComponent, canActivate:[LogoutGuard] },
  { path : '', redirectTo : 'home', pathMatch:'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
