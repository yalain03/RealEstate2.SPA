import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../_services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};
  isLoading = false;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  login() {
    this.isLoading = true;
    this.authService.login(this.model).subscribe(next => {
    }, error => {
      this.isLoading = false;
      alert(error);
    }, () => {
      this.router.navigate(['/houses']);
    }) ;
  }

  loggedIn() {
    const token = localStorage.getItem('token');
    return !!token;
  }

}
