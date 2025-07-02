import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DestacadosComponent } from './destacados/destacados.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductoCardComponent } from './producto-card/producto-card.component';
import { AllProductosComponent } from './all-productos/all-productos.component';
import { CarritoComponent } from './carrito/carrito.component';
import { ProductoIdComponent } from './producto-id/producto-id.component';

@NgModule({
  declarations: [
    AppComponent,
    DestacadosComponent,
    ProductoCardComponent,
    AllProductosComponent,
    CarritoComponent,
    ProductoIdComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
