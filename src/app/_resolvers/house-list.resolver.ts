import { Injectable } from '@angular/core';
import { House } from '../_models/house';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { UserService } from '../_services/user.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class HouseListResolver implements Resolve<House[]> {
    constructor(private userService: UserService, private router: Router) {}

    resolve(route: ActivatedRouteSnapshot): Observable<House[]> {
        return this.userService.getHouses().pipe(
            catchError(error => {
                console.log(error);
                this.router.navigate(['/home']);
                return of(null);
            })
        );
    }
}