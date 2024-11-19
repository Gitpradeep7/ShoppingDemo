import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { WomenclothComponent } from './womencloth/womencloth.component';
import { MensclothComponent } from './menscloth/menscloth.component';
import { JewelComponent } from './jewel/jewel.component';
import { ElectricdeviceComponent } from './electricdevice/electricdevice.component';

const routes: Routes = [{path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'home',component:HomeComponent,
    children:[
      {path:'women',component:WomenclothComponent},
      {path:'men',component:MensclothComponent},
      {path:'jewel',component:JewelComponent},
      {path:'electric',component:ElectricdeviceComponent}
    ]
  },
  {path:'cart',component:CartComponent},
  {path:'',redirectTo:'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
