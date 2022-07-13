import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MyproductsService {
  url =
    'https://my-project-1504072703875-default-rtdb.firebaseio.com/products.json';
  constructor(private http: HttpClient) {}

  saveProducts(product: any[]) {
    // return this.http.post(this.url, product);
    return this.http.put(this.url, product);
  }

  fatchProducts() {
    return this.http.get(this.url);
  }
  fatchTitle() {
    return this.http.get(
      'https://my-project-1504072703875-default-rtdb.firebaseio.com/dataTitle.json'
    );
  }
}
