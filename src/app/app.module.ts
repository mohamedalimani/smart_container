import { NotFoundComponent } from './not-found/not-found.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router'
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { UserComponent } from './user/user.component';
import { SignupComponent } from './signup/signup.component';
import { AddcontainerComponent } from './addcontainer/addcontainer.component';
import { MapComponent } from './map/map.component';

const root:Routes = [{path:'',component:MainComponent},
                     {path:'user',component:UserComponent}, 
                     {path:'signup',component:SignupComponent},
                     {path:'add',component:AddcontainerComponent},   
                     {path:'**',component:NotFoundComponent}] ;

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    FooterComponent,
    UserComponent,
    NotFoundComponent,
    SignupComponent,
    AddcontainerComponent,
    MapComponent
  ],
  imports: [BrowserModule,
            RouterModule.forRoot(root)
          ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
