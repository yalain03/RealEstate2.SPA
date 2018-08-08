import { Component, OnInit } from '@angular/core';
import { House } from '../../_models/house';
import { UserService } from '../../_services/user.service';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';
import { Pagination, PaginatedResult } from '../../_models/pagination';
import { AuthService } from '../../_services/auth.service';

@Component({
  selector: 'app-house-list',
  templateUrl: './house-list.component.html',
  styleUrls: ['./house-list.component.css']
})
export class HouseListComponent implements OnInit {
  houses: House[];
  house: House = JSON.parse(localStorage.getItem('user'));
  houseParams: any = {};
  pagination: Pagination;

  constructor(private userService: UserService, private route: ActivatedRoute,
    private authService: AuthService) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.houses = data['houses'].result;
      this.pagination = data['houses'].pagination;
    });
    // console.log(this.authService.decodedToken.nameid);

    this.houseParams.rooms = null;
    this.houseParams.area = null;
    this.houseParams.price = null;
    this.houseParams.state = null;
    this.houseParams.city = null;
  }

  pageChanged(event: any): void {
    this.pagination.currentPage = event.page;
    this.loadHouses();
  }

  loadHouses() {
    this.userService.getHouses(this.pagination.currentPage, this.pagination.itemsPerPage, this.houseParams)
      .subscribe((res: PaginatedResult<House[]>) => {
        this.houses = res.result;
        this.pagination = res.pagination;
      }, error => {
        console.log(error);
      });
  }

}
