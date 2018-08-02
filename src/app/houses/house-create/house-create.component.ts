import { Component, OnInit } from '@angular/core';
import { UserService } from '../../_services/user.service';

@Component({
  selector: 'app-house-create',
  templateUrl: './house-create.component.html',
  styleUrls: ['./house-create.component.css']
})
export class HouseCreateComponent implements OnInit {
  model: any = {};

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  setAvailable() {
    this.model.sold = true;
  }

  setNotAvailable() {
    this.model.sold = false;
  }

  createHouse() {
    this.userService.createHouse(this.model);
  }

}
