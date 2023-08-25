import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from 'src/app/models/Producto';
import { ProductsService } from 'src/app/services/ProductsService.service';

@Component({
  selector: 'app-admninistrative-products',
  templateUrl: './admninistrative-products.component.html',
  styleUrls: ['./admninistrative-products.component.css']
})

export class AdmninistrativeProductsComponent implements OnInit {
  nombrePagina: string = 'CREAR PRODUCTO';
  id: number = 0;
  form: FormGroup;
  mostrarAlerta: boolean = false;
  mostrarError: boolean = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private _productsService: ProductsService
  ) {
    this.form = this.fb.group({
      id: [''],
      title: ['', Validators.required],
      price: ['', Validators.required],
      description: ['',Validators.required],
      category: ['', Validators.required],

    });
  }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get(
      'id'
    );
    this.id = Number(id);
    if (this.id != 0) {
      this.nombrePagina = 'EDITAR PRODUCTOS';
      this._productsService.GetProductosPorId(this.id)
        .subscribe({
          next: (datos) => {
            this.form.setValue(datos);
            
          }
        });
    }
  }
  crearProductos(form: Producto) {
      if (this.id != 0) {
        let formData = new FormData();
        formData.append('category', form.category);
        formData.append('description', form.description);
        formData.append('price', form.price.toString());
        formData.append('title', form.title);
        formData.append('title', form.image);
        this._productsService.putProductos(this.id,formData).subscribe({
          next: (data) => {
            this.mostrarAlerta = true;
            setTimeout(() => {
              this.mostrarAlerta = false;
            }, 3000);
          },
          error: (error) => {
            this.mostrarError = true;
            setTimeout(() => {
              this.mostrarError = false;
            }, 3000);
          },
        });
      } else {
        var formData = new FormData();   
        formData.append('category', form.category);
        formData.append('description', form.description);
        formData.append('price', form.price.toString());
        formData.append('title', form.title);
        this._productsService.postProductos(formData).subscribe({
          next: (data) => {
            this.mostrarAlerta = true;
            setTimeout(() => {
              this.mostrarAlerta = false;
            }, 3000);
          },
          error: (error) => {
            this.mostrarError = true;
            setTimeout(() => {
              this.mostrarError = false;
            }, 3000);
          },
        });
      }
    
  }
  atras() {
    this.router.navigate(['home']);
  }


}


