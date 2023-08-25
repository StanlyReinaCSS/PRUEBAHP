import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, map, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Producto } from '../models/Producto';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  ProductosAPI: string;

  constructor(private http: HttpClient) {
    this.ProductosAPI = environment.baseUrlApi;
  }

  GetProductosPorId(Id: number): Observable<Producto> {
    return this.http.get<Producto>(
      `${this.ProductosAPI}products/${Id}`
    );
  }

  getProductos(): Observable<Producto[]> {
     let response = this.http.get<Producto[]>(this.ProductosAPI + 'products');
     return response;
  }

  postProductos(formData: any): Observable<any> {
    return this.http.post(this.ProductosAPI + `products`, formData);
  }

  putProductos(id: number, formData: any): Observable<any> {
    return this.http.put(`https://fakestoreapi.com/products/${id}`, formData);
  }

  deleteProductos(
    id: number
  ): Observable<Producto> {
    return this.http
      .delete<Producto>(
        `${environment.baseUrlApi}products/${id}`
      )
  }

}


