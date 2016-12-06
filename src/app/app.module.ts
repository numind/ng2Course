import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { PropertyBindingComponent } from './databinding/property-binding.component';
import { EventBindingComponent } from './databinding/event-binding.component';
import { TwoWayBindingComponent } from './databinding/two-way-binding.component';
import { LifecycleComponent } from './lifecycle.component';



@NgModule({
  // which components I will use
  declarations: [
    AppComponent,
    DatabindingComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    TwoWayBindingComponent,
    LifecycleComponent
  ],
  // which other modules I should use
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  // for the services
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

/*

import { AngularFireModule } from 'angularfire2';

export const firebaseConfig = {
      apiKey: "AIzaSyCkTX5jePRZ_mTsZCcB_HrnwD4hYWTiz7Y",
      authDomain: "projectm-228d1.firebaseapp.com",
      databaseURL: "https://projectm-228d1.firebaseio.com",
      storageBucket: "projectm-228d1.appspot.com",
      messagingSenderId: "383990651868"
};

import { NewCmpComponent } from './new-cmp/new-cmp.component';
,
NewCmpComponent


,
AngularFireModule.initializeApp(firebaseConfig)
*/
