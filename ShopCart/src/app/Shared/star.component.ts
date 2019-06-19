import { Component, OnChanges, Input, EventEmitter, Output } from "@angular/core";
 

@Component({
    selector:'<shp-star>',
    templateUrl:'./star.component.html',
    styleUrls:['./star.component.css']
})
export class StarComponent implements OnChanges
{
    starWidth:number ;
    @Input() rating:number;

    ngOnChanges(): void {
        this.starWidth = this.rating * 75 / 5;
      }

    @Output() ratingClicked : EventEmitter<string>=new EventEmitter<string>();

    onClick() :void{
        alert('The Rating ${this.rating}');
        this.ratingClicked.emit(`The Rating ${this.rating}`);
    }
}