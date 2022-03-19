import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './app/dashboard/dashboard.component';
import { ScreenComponent } from './app/dashboard/screen/screen.component';
import { IndexComponent } from './app/index/index.component';
import { HeaderComponent } from './app/dashboard/screen/header/header.component';
import { FooterComponent } from './app/dashboard/screen/footer/footer.component';
import { MainComponent } from './app/dashboard/main/main.component';
import { ListcartComponent } from './app/dashboard/listcart/listcart.component';
import { InforaccountComponent } from './app/dashboard/inforaccount/inforaccount.component';
import { TransfersComponent } from './app/dashboard/transfers/transfers.component';
import { LoginComponent } from './app/index/login/login.component';
import { Page1Component } from './app/dashboard/main/page1/page1.component';
import { Page2Component } from './app/dashboard/main/page2/page2.component';
import { Page3Component } from './app/dashboard/main/page3/page3.component';
import { Page4Component } from './app/dashboard/main/page4/page4.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ScreenComponent,
    IndexComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    ListcartComponent,
    InforaccountComponent,
    TransfersComponent,
    LoginComponent,
    Page1Component,
    Page2Component,
    Page3Component,
    Page4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
