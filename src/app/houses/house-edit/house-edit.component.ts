import { Component, OnInit } from '@angular/core';
import { House } from '../../_models/house';
import { UserService } from '../../_services/user.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { AuthService } from '../../_services/auth.service';

@Component({
  selector: 'app-house-edit',
  templateUrl: './house-edit.component.html',
  styleUrls: ['./house-edit.component.css']
})
export class HouseEditComponent implements OnInit {
  house: House;
  isLoading = false;

  constructor(private route: ActivatedRoute, private userService: UserService,
    private router: Router, private authService: AuthService) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.house = data['house'];
    });
  }

  setAvailable() {
    this.house.sold = false;
  }

  setNotAvailable() {
    this.house.sold = true;
  }

  updateHouse() {
    this.isLoading = true;
    this.house.userId = this.authService.decodedToken.nameid;
    this.userService.updateHouse(this.house).subscribe((response: Response) => {
      this.router.navigate(['/house/photo/', this.house.id]);
    }, error => {
      this.isLoading = false;
      console.log(error);
    });
  }

}
