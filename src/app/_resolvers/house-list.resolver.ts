import { Injectable } from '@angular/core';
import { House } from '../_models/house';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { UserService } from '../_services/user.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from '../_services/auth.service';

@Injectable()
export class HouseListResolver implements Resolve<House[]> {
    pageNumber = 1;
    pageSize = 6;

    constructor(private userService: UserService, private router: Router) {}

    resolve(route: ActivatedRouteSnapshot): Observable<House[]> {
        return this.userService.getHouses(this.pageNumber, this.pageSize).pipe(
            catchError(error => {
                console.log(error);
                this.router.navigate(['/home']);
                return of(null);
            })
        );
    }
}