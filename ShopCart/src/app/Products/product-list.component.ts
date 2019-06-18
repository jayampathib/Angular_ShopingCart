import { Component } from "@angular/core";

@Component({
    selector:'shp-product-list',
    templateUrl:'./product-list.component.html'
})
export class ProductListComponent
{
    pageTitle:string ='Product List';
    imageWidth :number =50;
    margin:number =2;
    listFilter:string = 'movie'

    showImage:boolean =false;
    toggleImage() :void{
            this.showImage=!this.showImage;
    }

    products :any[]=[
        {
            "productId" : 1,
            "productType" : "Dvd",
            "category" : "Movie" ,
            "name" :"Titanic" ,
            "releaseDate" :"2000-01-31" ,
            "price":3.25,
            "starRating":8.2,
            "coverImageUrl":"assets\/Img\/titanic.jpg"
        },
        {
            "productId" : 2,
            "productType" : "Dvd",
            "category" : "Movie" ,
            "name" :"Rambo" ,
            "releaseDate" :"1988-08-31" ,
            "price":1.25,
            "starRating":6.4,
            "coverImageUrl":"assets\/Img\/Rambo.jpg"
        }
    ];
}