import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  private productosAgregados: Product[] = [];
  private productosSubject = new BehaviorSubject<Product[]>([]);

  constructor() {
    const guardados = localStorage.getItem('carrito');
    if (guardados) {
      this.productosAgregados = JSON.parse(guardados);
      this.productosSubject.next(this.productosAgregados);
    }
  }

  agregar(producto: Product) {
    this.productosAgregados = [...this.productosAgregados, producto];
    this.actualizarLocalStorage();
    this.productosSubject.next(this.productosAgregados);
  }

  getAll(): Observable<Product[]> {
    return this.productosSubject.asObservable();
  }

  eliminar(id: number) {
    for (let i = 0; i < this.productosAgregados.length; i++) {
      if (this.productosAgregados[i].id === id) {
        this.productosAgregados.splice(i, 1);
        this.actualizarLocalStorage();
        this.productosSubject.next(this.productosAgregados);
        break;
      }
    }
  }

  private actualizarLocalStorage() {
    localStorage.setItem('carrito', JSON.stringify(this.productosAgregados));
  }
}
