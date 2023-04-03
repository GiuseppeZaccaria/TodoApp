import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable, take} from 'rxjs';
import {select, Store} from "@ngrx/store";
import {selectAllTodos, selectIsLogged} from "./store/selector";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private store: Store, private router: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.store.pipe(
      select(selectIsLogged),
      map(isLogged => {
        if (!isLogged) {
          this.router.navigate(['/login']);
          return false;
        }
        return true;
      }),
    );
  }
}
