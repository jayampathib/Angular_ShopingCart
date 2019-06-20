import { Component, OnInit } from "@angular/core";

import{IProduct} from "./IProduct";
import{StarComponent} from "../Shared/star.component";
import { ProductService } from "./product.service";

@Component({
    selector:'shp-product-list',
    templateUrl:'./product-list.component.html'
})
export class ProductListComponent  implements OnInit
{
    ngOnInit(): void {
       this.products = this.productService.getProducts();
    }

    constructor(private productService : ProductService) {
    }
    products :IProduct[] ;

    pageTitle:string ='Product List';
    imageWidth :number =50;
    margin:number =2;
    listFilter:string = 'movie'

    showImage:boolean =false;
    toggleImage() :void{
            this.showImage=!this.showImage;
    }
    onRatingClicked(message:string): void{
        this.pageTitle = 'Product List :'+message;
    }

    
    
}