import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { LoginComponent } from './login/login.component';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { StockComponent } from './stock/stock.component';
import { MyIdeasComponent } from './my-ideas/my-ideas.component';
import { CurrencyComponent } from './admin/currency/currency.component';
import { AddCurrencyComponent } from './admin/currency/add-currency/add-currency.component';
import { CurrencyService } from './currency.service';
import { RegisterComponent } from './login/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MyOrdersComponent,
    AdminOrdersComponent,
    LoginComponent,
    BsNavbarComponent,
    StockComponent,
    MyIdeasComponent,
    CurrencyComponent,
    AddCurrencyComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'login', component: LoginComponent },
      { path: 'admin/orders', component: AdminOrdersComponent },
      { path: 'stock', component: StockComponent },
      { path: 'myIdeas', component: MyIdeasComponent },
      { path: 'admin/currency', component: CurrencyComponent },
      { path: 'admin/currency/addCurrency', component: AddCurrencyComponent },
      { path: 'login/register', component: RegisterComponent },
    ]),
  ],
  providers: [CurrencyService],
  bootstrap: [AppComponent],
})
export class AppModule {}
