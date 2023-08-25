import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeProductsComponent } from './components/home-products/home-products.component';
import { ListProductsComponent } from './components/list-products/list-products.component';
import { AdmninistrativeProductsComponent } from './components/admninistrative-products/admninistrative-products.component';
import { ContactComponent } from './components/contact/contact.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { AppComponent } from './app.component';
const routes: Routes = [
  { path: 'home', component: HomeProductsComponent, canActivate: [AuthGuard] },
  { path: 'lista-productos', component: ListProductsComponent, canActivate: [AuthGuard] },
  { path: 'administracion-productos/:id', component: AdmninistrativeProductsComponent, canActivate: [AuthGuard] },
  { path: 'contacto', component: ContactComponent, canActivate: [AuthGuard] }, 
  { path: 'login', component: LoginComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

