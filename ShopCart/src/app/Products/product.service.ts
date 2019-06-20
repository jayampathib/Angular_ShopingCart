import { Injectable } from "@angular/core";
import { IProduct } from "./IProduct";


@Injectable()
export class ProductService{

    getProducts() : IProduct[]{
        return  [{
        "productId": 1,
        "productType": "Dvd",
        "category": "Movie",
        "name": "Titanic",
        "releaseDate": "2000-01-31",
        "price": 3.25,
        "starRating": 3.2,
        "coverImageUrl": "assets\/Img\/titanic.jpg"
    },
    {
        "productId": 2,
        "productType": "Dvd",
        "category": "Movie",
        "name": "Rambo",
        "releaseDate": "1988-08-31",
        "price": 1.25,
        "starRating": 1.5,
        "coverImageUrl": "assets\/Img\/Rambo.jpg"
    }];
    }
}