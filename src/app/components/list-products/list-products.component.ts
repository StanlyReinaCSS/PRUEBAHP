import { Component } from '@angular/core';
import { Producto } from 'src/app/models/Producto';
import { ProductsService } from 'src/app/services/ProductsService.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent {
  products: Producto[] = [];
  mostrarAlerta: boolean = false;
  id!: number;
  constructor(
    private router: Router,
    private _productsService: ProductsService,
  ) { }

  ngOnInit() {

    this.listarProductos();
  }

  listarProductos() {
    this._productsService
      .getProductos()
      .subscribe({
        next: (data) => {
          this.products = data;
        }
      });
  }

  eliminarProductos(id:number) {
    this._productsService
      .deleteProductos(id)
      .subscribe({
        next: (data) => {
          this.mostrarAlerta = true;
          setTimeout(() => {
            this.mostrarAlerta = false;
          }, 3000);
        }
      });
  }

  nuevoproducto() {
    this.router.navigate(['administracion-productos', 'new']);
  }

  editarProducto(id: number) {
    this.router.navigate([`administracion-productos/${id}`]);
  }

  
}
