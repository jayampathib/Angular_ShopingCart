import { Component } from "@angular/core";

import { IProduct } from "./IProduct";

@Component({
  //  selector : '<shp-product-detail>',
    templateUrl:'product-detail.component.html'
})
export class ProductDetailComponent 
{
    pageTitle: string = "Product Detail of Id ";
    product : IProduct;
 

}