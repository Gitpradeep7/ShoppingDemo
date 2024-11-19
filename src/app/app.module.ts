import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { NetworkComponent } from './network/network.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MensclothComponent } from './menscloth/menscloth.component';
import { WomenclothComponent } from './womencloth/womencloth.component';
import { JewelComponent } from './jewel/jewel.component';
import { ElectricdeviceComponent } from './electricdevice/electricdevice.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    CartComponent,
    NetworkComponent,
    MensclothComponent,
    WomenclothComponent,
    JewelComponent,
    ElectricdeviceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
