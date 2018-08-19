import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { House } from '../_models/house';
import { PaginatedResult } from '../_models/pagination';
import { map } from 'rxjs/operators';
import { User } from '../_models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = environment.apiUrl;

constructor(private http: HttpClient, private authService: AuthService) { }

getHouses(page?, itemsPerPage?, houseParams?): Observable<PaginatedResult<House[]>> {
  const paginatedResult: PaginatedResult<House[]> = new PaginatedResult<House[]>();

  let params = new HttpParams();

  if(page != null && itemsPerPage != null) {
    params = params.append('pageNumber', page);
    params = params.append('pageSize', itemsPerPage);
  }

  if(houseParams != null) {
    const city = (houseParams.city) != null ? houseParams.city : '';
    params = params.append('city', city);
    const state = (houseParams.state) != null ? houseParams.state : '';
    params = params.append('state', state);
    const rooms = (houseParams.rooms) != null ? houseParams.rooms : -1;
    params = params.append('rooms', rooms);
    // const price = (houseParams.price) != null ? houseParams.price : -1;
    // params = params.append('price', price);
    let price = houseParams.price;
    if(price == null || price === '') {
      price = -1;
    }
    params = params.append('price', price);
    let area = houseParams.area;
    if(area == null || area === '') {
      area = -1;
    }
    params = params.append('area', area);
  }

  return this.http.get<House[]>(this.baseUrl + 'houses', { observe: 'response', params })
    .pipe(
      map(response => {
        // console.log(response.body);
        paginatedResult.result = response.body;
        if(response.headers.get('Pagination') != null) {
          paginatedResult.pagination = JSON.parse(response.headers.get('Pagination'));
        }
        return paginatedResult;
      })
    );
}

getHousesForUser(id, page?, itemsPerPage?, houseParams?): Observable<PaginatedResult<House[]>> {
  const paginatedResult: PaginatedResult<House[]> = new PaginatedResult<House[]>();

  let params = new HttpParams();

  if(page != null && itemsPerPage != null) {
    params = params.append('pageNumber', page);
    params = params.append('pageSize', itemsPerPage);
  }

  if(houseParams != null) {
    const city = (houseParams.city) != null ? houseParams.city : null;
    params = params.append('city', city);
    const state = (houseParams.state) != null ? houseParams.state : null;
    params = params.append('state', state);
    const rooms = (houseParams.rooms) != null ? houseParams.rooms : -1;
    params = params.append('rooms', rooms);
    // const price = (houseParams.price) != null ? houseParams.price : -1;
    // params = params.append('price', price);
    // const area = (houseParams.area) != null ? houseParams.area : -1;
    // params = params.append('area', area);
    let price = houseParams.price;
    if(price == null || price === '') {
      price = -1;
    }
    params = params.append('price', price);
    let area = houseParams.area;
    if(area == null || area === '') {
      area = -1;
    }
    params = params.append('area', area);
  }

  return this.http.get<House[]>(this.baseUrl + 'houses/users/' + id,
    { observe: 'response', params })
    .pipe(
      map(response => {
        paginatedResult.result = response.body;
        if(response.headers.get('Pagination') != null) {
          paginatedResult.pagination = JSON.parse(response.headers.get('Pagination'));
        }
        return paginatedResult;
      })
    );
}

getHouse(id): Observable<House> {
  return this.http.get<House>(this.baseUrl + 'houses/' + id);
}

createHouse(id: number, model: House) {
  return this.http.post(this.baseUrl + 'houses/user/' + id, model);
}

updateHouse(model: House) {
  return this.http.put(this.baseUrl + 'houses/' + model.id, model);
}

deleteHouse(id: number, userId: number) {
  return this.http.delete(this.baseUrl + 'houses/user/' + userId + '/delete/' + id);
}

getUser(id: number) {
  return this.http.get<User>(this.baseUrl + 'users/' + id);
}

updateUser(model: User) {
  return this.http.put(this.baseUrl + 'users/' + model.id, model);
}

deletePhoto(houseId: number, id: number) {
  return this.http.delete(this.baseUrl + 'houses/' + houseId + '/photos/' + id);
}

setMainPhoto(houseId, id) {
  return this.http.post(this.baseUrl + 'houses/' + houseId + '/photos/' + id + '/main', {});
}
}
