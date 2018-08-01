import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { House } from '../_models/house';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = environment.apiUrl;

constructor(private http: HttpClient, private authService: AuthService) { }

getHouses(): Observable<House[]> {
  return this.http.get<House[]>(this.baseUrl + 'houses');
}

getHouse(id): Observable<House> {
  return this.http.get<House>(this.baseUrl + 'houses/' + id);
}

}
