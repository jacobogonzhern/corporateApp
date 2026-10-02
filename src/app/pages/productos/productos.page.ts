import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonRow, IonCol, IonButtons, IonBackButton } from '@ionic/angular';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../models/product.interface';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
  standalone: true,
  imports: [CommonModule, IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonRow, IonCol, IonButtons, IonBackButton],
})
export class ProductosPage implements OnInit {
  products = signal<Product[]>([]);

  constructor(private productService: ProductsService) {}

  async ngOnInit() {
    this.products.set(await this.productService.getProducts());
  }
}