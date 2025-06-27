import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductsDataService } from '../services/products-data.service';
import { Product} from '../product';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-destacados',
  standalone: false ,
  templateUrl: `./destacados.component.html`,
})
export class DestacadosComponent implements OnInit, OnDestroy {

  listaDestacados: Product[] = [];
  private suscripcion!: Subscription;

  constructor(private destacados: ProductsDataService) {}

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
}
