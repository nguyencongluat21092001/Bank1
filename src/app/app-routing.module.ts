import { Page3Component } from './app/dashboard/main/page3/page3.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page1Component } from './app/dashboard/main/page1/page1.component';
import { Page2Component } from './app/dashboard/main/page2/page2.component';
import { FooterComponent } from './app/dashboard/screen/footer/footer.component';
import { HeaderComponent } from './app/dashboard/screen/header/header.component';
import { Page4Component } from './app/dashboard/main/page4/page4.component';
import { IndexComponent } from './app/index/index.component';

const routes: Routes = [
  {path:'header',component:HeaderComponent},
  {path:'footer',component:FooterComponent},
  {path:'homepage', component:Page1Component},
  {path:'listcard',component:Page2Component},
  {path:'transfers',component:Page3Component},
  {path:'information',component:Page4Component},
  {path:'index',component:IndexComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
