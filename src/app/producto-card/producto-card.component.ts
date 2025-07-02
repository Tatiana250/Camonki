import { Component, Input } from '@angular/core';
import { Product } from '../product';
import { CarritoService } from '../services/carrito.service';

@Component({
  selector: 'app-producto-card',
  standalone: false,
  templateUrl: './producto-card.component.html',
  styleUrl: './producto-card.component.scss'
})
export class ProductoCardComponent {
  @Input() producto!: Product;

}
