import { Injectable } from '@angular/core';
import { House } from '../_models/house';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { UserService } from '../_services/user.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class HouseDetailResolver implements Resolve<House> {
    constructor(private userService: UserService, private router: Router) {}

    resolve(route: ActivatedRouteSnapshot): Observable<House> {
        return this.userService.getHouse(route.params['id']).pipe(
            catchError(error => {
                console.log(error);
                this.router.navigate(['/houses']);
                return of(null);
            })
        );
    }
}