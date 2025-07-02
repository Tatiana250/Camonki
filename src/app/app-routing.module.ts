import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DestacadosComponent } from './destacados/destacados.component';
import { AllProductosComponent } from './all-productos/all-productos.component';
import { CarritoComponent } from './carrito/carrito.component';
import { ProductoIdComponent } from './producto-id/producto-id.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: DestacadosComponent
  },
  {path: 'destacados',
    component: DestacadosComponent
  },
  {
    path: 'productos',
    component: AllProductosComponent
  },
  {
    path: 'miCarrito',
    component: CarritoComponent
  },
  {
    path: 'producto/:id',
    component: ProductoIdComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
