import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent }from './home/home.component';
import { LoginComponent } from './login/login.component';
import { OrderConfirmComponent } from './order-confirm/order-confirm.component';
import { RegisterComponent } from './register/register.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { CartComponent } from './cart/cart.component';
import { MobileComponent } from './mobile/mobile.component';
import { AppleMobileComponent } from './apple-mobile/apple-mobile.component';
import { Apple1Component } from './apple1/apple1.component';
import { Apple2Component } from './apple2/apple2.component';
import { Apple3Component } from './apple3/apple3.component';
import { Apple4Component } from './apple4/apple4.component';
import { Apple5Component } from './apple5/apple5.component';
import { Apple6Component } from './apple6/apple6.component';
import { Apple7Component } from './apple7/apple7.component';
import { Apple8Component } from './apple8/apple8.component';
import { Oneplus1Component } from './oneplus1/oneplus1.component';
import { Oneplus2Component } from './oneplus2/oneplus2.component';
import { Oneplus4Component } from './oneplus4/oneplus4.component';
import { Oneplus3Component } from './oneplus3/oneplus3.component';
import { Oneplus7Component } from './oneplus7/oneplus7.component';
import { Oneplus5Component } from './oneplus5/oneplus5.component';
import { Oneplus6Component } from './oneplus6/oneplus6.component';
import { Oneplus8Component } from './oneplus8/oneplus8.component';
import { Samsung1Component } from './samsung1/samsung1.component';
import { Samsung3Component } from './samsung3/samsung3.component';
import { Samsung2Component } from './samsung2/samsung2.component';
import { Samsung8Component } from './samsung8/samsung8.component';
import { Samsung7Component } from './samsung7/samsung7.component';
import { Samsung6Component } from './samsung6/samsung6.component';
import { Samsung5Component } from './samsung5/samsung5.component';
import { Samsung4Component } from './samsung4/samsung4.component';
import { CartConfirmComponent } from './cart-confirm/cart-confirm.component';
import { ProfileComponent } from './profile/profile.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { DeletepageComponent } from './deletepage/deletepage.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'order-confirm',component:OrderConfirmComponent},
  {path:'register',component:RegisterComponent},
  {path:'welcome',component:WelcomeComponent},
  {path:'contactus',component:ContactusComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'cart/:name',component:CartComponent},
  {path:'cart-confirm',component:CartConfirmComponent},
  {path:'mobile',component:MobileComponent},
  {path:'apple-mobile',component:AppleMobileComponent},
  {path:'apple1',component:Apple1Component},
  {path:'apple2',component:Apple2Component},
  {path:'apple3',component:Apple3Component},
  {path:'apple4',component:Apple4Component},
  {path:'apple5',component:Apple5Component},
  {path:'apple6',component:Apple6Component},
  {path:'apple7',component:Apple7Component},
  {path:'apple8',component:Apple8Component},
  {path:'oneplus1',component:Oneplus1Component},
  {path:'oneplus2',component:Oneplus2Component},
  {path:'oneplus3',component:Oneplus3Component},
  {path:'oneplus4',component:Oneplus4Component},
  {path:'oneplus5',component:Oneplus5Component},
  {path:'oneplus6',component:Oneplus6Component},
  {path:'oneplus7',component:Oneplus7Component},
  {path:'oneplus8',component:Oneplus8Component},
  {path:'samsung1',component:Samsung1Component},
  {path:'samsung2',component:Samsung2Component},
  {path:'samsung3',component:Samsung3Component},
  {path:'samsung4',component:Samsung4Component},
  {path:'samsung5',component:Samsung5Component},
  {path:'samsung6',component:Samsung6Component},
  {path:'samsung7',component:Samsung7Component},
  {path:'samsung8',component:Samsung8Component},
  {path:'profile',component:ProfileComponent},
  {path:'editprofile',component:EditprofileComponent},
  {path:'deletepage',component:DeletepageComponent},
  {path:'',component:WelcomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration:"enabled"})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
