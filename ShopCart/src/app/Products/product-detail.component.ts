import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

import { IProduct } from "./IProduct";

@Component({
  //  selector : '<shp-product-detail>',
    templateUrl:'product-detail.component.html'
})
export class ProductDetailComponent implements OnInit
{
    pageTitle: string = "Product Detail of Id ";
    product : IProduct;
 
    constructor(private route : ActivatedRoute,
        private router: Router) { 

    }
    ngOnInit(): void {
         let id = +this.route.snapshot.paramMap.get('id');
         //let id = +this.route.snapshot.params.id;
         this.pageTitle += `: ${id}`;
    }
    onBack(): void{
        this.router.navigate(['/products']);
    }
    
}