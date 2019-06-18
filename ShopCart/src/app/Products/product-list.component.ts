import { Component } from "@angular/core";

@Component({
    selector:'shp-product-list',
    templateUrl:'./product-list.component.html'
})
export class ProductListComponent
{
    pageTitle:string ='Product List';
    products :any[]=[
        {
            "productId" : 1,
            "productType" : "Dvd",
            "category" : "Movie" ,
            "name" :"Titanic" ,
            "releaseDate" :"2000-01-31" ,
            "price":3.25,
            "starRating":8.2,
            "coverImageUrl":""
        },
        {
            "productId" : 2,
            "productType" : "Dvd",
            "category" : "Movie" ,
            "name" :"Rambo" ,
            "releaseDate" :"1988-08-31" ,
            "price":1.25,
            "starRating":6.4,
            "coverImageUrl":""
        }
    ];
}