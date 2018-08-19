import { Component, OnInit } from '@angular/core';
import { House } from '../../_models/house';
import { UserService } from '../../_services/user.service';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';
import { Pagination, PaginatedResult } from '../../_models/pagination';
import { AuthService } from '../../_services/auth.service';
// import { NgProgress } from '@ngx-progressbar/core';
import { ProgressService } from '../../_services/progress.service';

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
  availabilities = [{value: 'yes', display: 'yes'}, {value: 'no', display: 'no'}];

  constructor(private userService: UserService, private route: ActivatedRoute,
    private authService: AuthService, private progressService: ProgressService) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.houses = data['houses'].result;
      this.pagination = data['houses'].pagination;
    });
    // console.log(this.authService.decodedToken.nameid);

    // this.houseParams.rooms = null;
    // this.houseParams.area = null;
    // this.houseParams.price = null;
    // this.houseParams.state = null;
    // this.houseParams.city = null;
  }

  public getService() {
    return this.authService;
  }

  loggedIn() {
    return this.authService.loggedIn();
  }

  pageChanged(event: any): void {
    this.pagination.currentPage = event.page;
    this.loadHouses();
  }

  deleteHouse(id: number) {
    if(confirm('Are you sure you want to delete?')) {
      this.userService.deleteHouse(id, this.authService.decodedToken.nameid).subscribe(() => {
        location.reload();
      }, error => {
        console.log(error);
      });
    }
  }

  loadHouses() {
    this.progressService.getProgress().start();
    if(this.loggedIn()) {
      this.userService.getHousesForUser(this.authService.decodedToken.nameid, this.pagination.currentPage,
        this.pagination.itemsPerPage, this.houseParams)
      .subscribe((res: PaginatedResult<House[]>) => {
        // console.log(res);
        this.houses = res.result;
        this.pagination = res.pagination;
        this.progressService.getProgress().complete();
      }, error => {
        console.log(error);
      });
    } else {
      this.userService.getHouses(this.pagination.currentPage, this.pagination.itemsPerPage, this.houseParams)
      .subscribe((res: PaginatedResult<House[]>) => {
        // console.log(res);
        this.houses = res.result;
        this.pagination = res.pagination;
        this.progressService.getProgress().complete();
      }, error => {
        console.log(error);
      });
    }
  }

}
