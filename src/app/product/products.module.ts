import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { MyproductsService } from '../appServices/myproducts.service';

@NgModule({
  declarations: [ProductComponent],
  imports: [CommonModule],
  providers: [MyproductsService],
})
export class ProductsModule {}
