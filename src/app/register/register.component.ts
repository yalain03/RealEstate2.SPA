import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { Router } from '../../../node_modules/@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { User } from '../_models/user';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: User;
  // baseUrl = 'http://localhost:5000/api/auth/';
  baseUrl = environment.apiUrl + 'auth';
  registerForm: FormGroup;

  constructor(private authService: AuthService, private router: Router, private fb: FormBuilder) { }

  ngOnInit() {
    this.createRegisterForm();
  }

  passwordMatchValidator(g: FormGroup) {
    return g.get('password').value === g.get('confirmPassword').value ? null : {'mismatch': true};
  }

  createRegisterForm() {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(15)]],
      confirmPassword: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      dateOfBirth: [null, Validators.required],
      gender: ['', Validators.required]
    }, {validator: this.passwordMatchValidator});
  }

  register() {
    if(this.registerForm.valid) {
      this.user = Object.assign({}, this.registerForm.value);
      this.authService.register(this.user).subscribe(() => {
        this.router.navigate(['/login']);
      }, error => {
        alert(error);
      });
    }
  }

  getUrl() {
    return 'https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940';
  }

}
