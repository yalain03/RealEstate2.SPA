import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model: any = {};
  baseUrl = 'http://localhost:5000/api/auth/';

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  register() {
    if(this.model.password === this.model.confirm) {
      this.authService.register(this.model).subscribe(() => {
        this.router.navigate(['/login']);
      }, error => {
        console.log(error);
      });
    } else {
      alert('Password and confirmation are different');
    }
  }

}
