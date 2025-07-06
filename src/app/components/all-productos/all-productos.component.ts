import { Component, ElementRef, ViewChild } from '@angular/core';
import { Product } from '../../interfaces/product';
import { Subscription } from 'rxjs';
import { ProductsDataService } from '../../services/products-data.service';

@Component({
  selector: 'app-all-productos',
  standalone: false,
  templateUrl: './all-productos.component.html',
  styleUrl: './all-productos.component.scss'
})
export class AllProductosComponent {
  listaProductos: Product[] = [];
  private suscripcion!: Subscription;

  constructor(private productos: ProductsDataService) {}

  @ViewChild('contenedor', { static: false }) contenedor!: ElementRef;

  ngOnInit(): void { //funcion para suscribirme
    this.suscripcion = this.productos.getAll().subscribe(data => {
      this.listaProductos = data;
    });
  }

  ngOnDestroy(): void { //funcion para desuscribirme
    if (this.suscripcion) {
      this.suscripcion.unsubscribe();
    }
  }

  trackById(index: number, item: Product): number {
    return item.id;
  }
  
   desplazarIzquierda() {
    this.contenedor.nativeElement.scrollBy({
      left: -200,
      behavior: 'smooth'
    });
  }

  desplazarDerecha() {
    this.contenedor.nativeElement.scrollBy({
      left: 200,
      behavior: 'smooth'
    });
  }
}

