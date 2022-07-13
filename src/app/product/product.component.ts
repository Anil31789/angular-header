import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MyproductsService } from '../appServices/myproducts.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  constructor(private _myproduct: MyproductsService) {}

  ngOnInit(): void {
    this.fatchProduct();
  }
  featchinfg = false;
  productTitle = this._myproduct.fatchTitle();
  @ViewChild('id') id!: ElementRef;
  @ViewChild('name') name!: ElementRef;
  @ViewChild('price') price!: ElementRef;

  editMode: boolean = false;
  editIndex!: number;
  products = [
    {
      ID: 'p1',
      pName: 'Mobile',
      pPrice: 15000,
    },
  ];
  onAddPoduct(id: any, name: any, price: any) {
    // console.log(id.value, name.value, price.value);
    if (this.editMode) {
      // console.log(this.products[this.editIndex]);
      this.products[this.editIndex] = {
        ID: id.value,
        pName: name.value,
        pPrice: price.value,
      };
      this.editMode = false;
      this.id.nativeElement.value = '';
      this.name.nativeElement.value = '';
      this.price.nativeElement.value = '';
    } else {
      this.products.push({
        ID: id.value,
        pName: name.value,
        pPrice: price.value,
      });
    }
    this.saveProduct();
  }
  onDeleteItem(id: number) {
    if (confirm('Do you want to delete this product?')) {
      this.products.splice(id, 1);
      this.saveProduct();
    }
  }
  saveProduct() {
    this._myproduct.saveProducts(this.products).subscribe(
      (response) => console.log(response),
      (err) => console.log(err)
    );
  }
  fatchProduct() {
    this.featchinfg = true;
    this._myproduct.fatchProducts().subscribe(
      (response) => {
        console.log(response);
        // this.products = response
        const data = JSON.stringify(response);
        // console.log(data);
        this.products = JSON.parse(data);
        this.featchinfg = false;
      },
      (err) => console.log(err)
    );
  }

  onEditItem(index: number) {
    this.editMode = true;
    this.editIndex = index;
    console.log(this.products[index]);
    this.id.nativeElement.value = this.products[index].ID;
    this.name.nativeElement.value = this.products[index].pName;
    this.price.nativeElement.value = this.products[index].pPrice;
  }
}
