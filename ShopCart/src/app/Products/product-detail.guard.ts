import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, Route } from '@angular/router';
import { Observable } from 'rxjs';
//import { Promise } from 'q';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailGuard implements CanActivate {
 
  constructor(router : Route) {
    
  }
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<boolean> | Promise<boolean> | boolean {
    
    let id = +route.url[1].path;
    if (isNaN(id) || id < 1) {
      alert('Invalid product Id');
      this.router.navigate(['/products']);
      return false;
    }
    return true;
  }

}
