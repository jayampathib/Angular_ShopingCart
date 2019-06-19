import { Component } from "@angular/core";

@Component({
    selector:'<shp-star>',
    templateUrl:'./star.component.html',
    styleUrls:['./star.component.css']
})
export class StarComponent
{
    starWidth:number=75;
    rating:number= 4;
}