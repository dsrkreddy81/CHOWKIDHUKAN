import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WelcomeComponent } from './welcome/welcome.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FooterComponent } from './footer/footer.component';
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
import { Samsung1Component } from './samsung1/samsung1.component';
import { Samsung2Component } from './samsung2/samsung2.component';
import { Samsung3Component } from './samsung3/samsung3.component';
import { Samsung4Component } from './samsung4/samsung4.component';
import { Samsung5Component } from './samsung5/samsung5.component';
import { Samsung6Component } from './samsung6/samsung6.component';
import { Samsung7Component } from './samsung7/samsung7.component';
import { Samsung8Component } from './samsung8/samsung8.component';
import { Oneplus1Component } from './oneplus1/oneplus1.component';
import { Oneplus2Component } from './oneplus2/oneplus2.component';
import { Oneplus3Component } from './oneplus3/oneplus3.component';
import { Oneplus4Component } from './oneplus4/oneplus4.component';
import { Oneplus5Component } from './oneplus5/oneplus5.component';
import { Oneplus6Component } from './oneplus6/oneplus6.component';
import { Oneplus7Component } from './oneplus7/oneplus7.component';
import { Oneplus8Component } from './oneplus8/oneplus8.component';
import { SamsungMobileComponent } from './samsung-mobile/samsung-mobile.component';
import { OneplusMobileComponent } from './oneplus-mobile/oneplus-mobile.component';
import { CartConfirmComponent } from './cart-confirm/cart-confirm.component';
import { ProfileComponent } from './profile/profile.component';
import { OrderConfirmComponent } from './order-confirm/order-confirm.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { DeletepageComponent } from './deletepage/deletepage.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    WelcomeComponent,
    FooterComponent,
    ContactusComponent,
    AboutusComponent,
    CartComponent,
    MobileComponent,
    AppleMobileComponent,
    Apple1Component,
    Apple2Component,
    Apple3Component,
    Apple4Component,
    Apple5Component,
    Apple6Component,
    Apple7Component,
    Apple8Component,
    Samsung1Component,
    Samsung2Component,
    Samsung3Component,
    Samsung4Component,
    Samsung5Component,
    Samsung6Component,
    Samsung7Component,
    Samsung8Component,
    Oneplus1Component,
    Oneplus2Component,
    Oneplus3Component,
    Oneplus4Component,
    Oneplus5Component,
    Oneplus6Component,
    Oneplus7Component,
    Oneplus8Component,
    SamsungMobileComponent,
    OneplusMobileComponent,
    CartConfirmComponent,
    ProfileComponent,
    OrderConfirmComponent,
    EditprofileComponent,
    DeletepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
