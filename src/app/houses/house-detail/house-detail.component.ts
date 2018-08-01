import { Component, OnInit } from '@angular/core';
import { House } from '../../_models/house';
import { UserService } from '../../_services/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-house-detail',
  templateUrl: './house-detail.component.html',
  styleUrls: ['./house-detail.component.css']
})
export class HouseDetailComponent implements OnInit {
  house: House;

  constructor(private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.loadHouse();
  }

  loadHouse() {
    this.userService.getHouse(+this.route.snapshot.params['id']).subscribe((house: House) => {
      this.house = house;
    }, error => {
      console.log(error);
    });
  }

}
