import { Component, OnInit } from '@angular/core';
import { House } from '../../_models/house';
import { UserService } from '../../_services/user.service';

@Component({
  selector: 'app-house-list',
  templateUrl: './house-list.component.html',
  styleUrls: ['./house-list.component.css']
})
export class HouseListComponent implements OnInit {
  houses: House[];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.loadHouses();
  }

  loadHouses() {
    this.userService.getHouses().subscribe((houses: House[]) => {
      this.houses = houses;
    }, error => {
      console.log(error);
    });
  }

  // loadHousesForUser(id) {

  // }

}
