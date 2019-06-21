import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
//import { Promise } from 'q';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailGuard implements CanActivate {
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<boolean> | Promise<boolean> | boolean {
    
    let id = +route.url[1].path;
    if (isNaN(id) || id < 1) {
      alert('Invalid product Id');
      
      return false;
    }
    return true;
  }

}
