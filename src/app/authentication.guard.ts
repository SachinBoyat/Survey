import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree {
    if (!this.authService.isUserLoggedIn()) {
      // alert('You are not allowed to view this page. You are redirected to login Page');

      this.router.navigate(['/'], { queryParams: { retUrl: route.url } });
      return false;

      //var urlTree = this.router.createUrlTree(['login']);
      //return urlTree;
    }

    return true;
  }
  //constructor(private router: Router) {

  // }
  // canActivate(
  //   route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //   if (!localStorage.getItem("token")) {
  //     this.router.navigateByUrl("/login");
  //     return false;
  //   }

  //   return true;
  // }
}
