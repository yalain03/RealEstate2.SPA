import { Component, OnInit } from '@angular/core';
import { House } from '../../_models/house';
import { UserService } from '../../_services/user.service';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-house-list',
  templateUrl: './house-list.component.html',
  styleUrls: ['./house-list.component.css']
})
export class HouseListComponent implements OnInit {
  houses: House[];

  constructor(private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.houses = data['houses'];
    });
  }
  }

  // loadHousesForUser(id) {

  // }

}
