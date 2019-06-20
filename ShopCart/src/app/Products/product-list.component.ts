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
    errorMessage :string;
    
    ngOnInit(): void {
        // this.products = 
        this.productService.getProducts().subscribe(
            products =>{
                this.products =products;
                this.filteredProducts =this.products;
            },
            error=> this.errorMessage = <any>error // <any> use to cast value
        );
      }

    constructor(private productService : ProductService) {
    }
    products :IProduct[] ;
    filteredProducts :IProduct[] ;

    pageTitle:string ='Product List';
    imageWidth :number =50;
    margin:number =2;
    listFilter:string = 'movie';

    showImage:boolean =false;
    toggleImage() :void{
            this.showImage=!this.showImage;
    }
    onRatingClicked(message:string): void{
        this.pageTitle = 'Product List :'+message;
    }

    
    
}