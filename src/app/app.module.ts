import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsermoodinfoComponent } from './usermoodinfo/usermoodinfo.component';
import { VendorComponent } from './vendor/vendor.component';
import { NavmenuComponent } from './navmenu/navmenu.component';
import { FoodComponent } from './food/food.component';

@NgModule({
  declarations: [
    AppComponent,
    UsermoodinfoComponent,
    VendorComponent,
    NavmenuComponent,
    FoodComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
