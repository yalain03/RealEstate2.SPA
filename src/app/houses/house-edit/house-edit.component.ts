import { Component, OnInit } from '@angular/core';
import { House } from '../../_models/house';
import { UserService } from '../../_services/user.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-house-edit',
  templateUrl: './house-edit.component.html',
  styleUrls: ['./house-edit.component.css']
})
export class HouseEditComponent implements OnInit {
  house: House;

  constructor(private route: ActivatedRoute, private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.house = data['house'];
    });
  }

  setAvailable() {
    this.house.sold = true;
  }

  setNotAvailable() {
    this.house.sold = false;
  }

  updateHouse(house: House) {
    this.userService.updateHouse(this.house).subscribe((response: Response) => {
      this.router.navigate(['/house/photo/', this.house.id]);
    }, error => {
      console.log(error);
    });
  }

}
