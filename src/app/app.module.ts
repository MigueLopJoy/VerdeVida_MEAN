import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { provideHttpClient } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component'
import { MainComponent } from './components/shared/main/main.component'
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavMenuComponent } from './components/shared/header/nav-menu/nav-menu.component';
import { CartComponent } from './components/pages/cart/cart.component';
import { AppRoutingModule } from './app-routing.module';
import { CartProductComponent } from './components/pages/cart/cart-product/cart-product.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavMenuComponent,
    CartComponent,
    CartProductComponent
  ],
  imports: [
    BrowserModule,
    MainComponent,
    AppRoutingModule
  ],
  providers: [
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
