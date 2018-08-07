import { Component, OnInit } from '@angular/core';
import { UserService } from '../../_services/user.service';
import { AuthService } from '../../_services/auth.service';
import { Router } from '@angular/router';
import { House } from '../../_models/house';

@Component({
  selector: 'app-house-create',
  templateUrl: './house-create.component.html',
  styleUrls: ['./house-create.component.css']
})
export class HouseCreateComponent implements OnInit {
  model: any = {};

  constructor(private userService: UserService, private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
  }

  setAvailable() {
    this.model.sold = false;
  }

  setNotAvailable() {
    this.model.sold = true;
  }

  createHouse() {
    this.model.userId = this.authService.decodedToken.nameid;
    this.userService.createHouse(this.authService.decodedToken.nameid, this.model).subscribe((house: House) => {
      this.router.navigate(['/house/photo/', house.id]);
    }, error => {
      console.log(error);
    });
  }

}
