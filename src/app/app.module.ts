import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DestacadosComponent } from './destacados/destacados.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductoCardComponent } from './producto-card/producto-card.component';

@NgModule({
  declarations: [
    AppComponent,
    DestacadosComponent,
    ProductoCardComponent,
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
