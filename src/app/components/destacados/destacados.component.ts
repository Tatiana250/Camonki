import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ProductsDataService } from '../../services/products-data.service';
import { Product} from '../../interfaces/product';
import { Subscription } from 'rxjs';
import { CarritoService } from '../../services/carrito.service';

@Component({
  selector: 'app-destacados',
  standalone: false ,
  templateUrl: `./destacados.component.html`,
  styleUrl: './destacados.component.scss',
})
export class DestacadosComponent implements OnInit, OnDestroy {

  listaDestacados: Product[] = [];
  private suscripcion!: Subscription;

  constructor(private destacados: ProductsDataService) {}

  @ViewChild('contenedor', { static: false }) contenedor!: ElementRef;

  ngOnInit(): void { //funcion para suscribirme
    this.suscripcion = this.destacados.getAll().subscribe(data => {
      this.listaDestacados = data;
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
