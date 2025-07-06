import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DestacadosComponent } from './components/destacados/destacados.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductoCardComponent } from './components/producto-card/producto-card.component';
import { AllProductosComponent } from './components/all-productos/all-productos.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { ProductoIdComponent } from './components/producto-id/producto-id.component';
import { RegistroUsuarioComponent } from './components/registro-usuario/registro-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    DestacadosComponent,
    ProductoCardComponent,
    AllProductosComponent,
    CarritoComponent,
    ProductoIdComponent,
    RegistroUsuarioComponent,
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
