import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeProductsComponent } from './components/home-products/home-products.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ListProductsComponent } from './components/list-products/list-products.component';
import { AdmninistrativeProductsComponent } from './components/admninistrative-products/admninistrative-products.component';
import { ContactComponent } from './components/contact/contact.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeProductsComponent,
    ListProductsComponent,
    AdmninistrativeProductsComponent,
    ContactComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,   
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
