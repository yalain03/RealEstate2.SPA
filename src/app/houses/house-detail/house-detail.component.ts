import { Component, OnInit } from '@angular/core';
import { House } from '../../_models/house';
import { UserService } from '../../_services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../_services/auth.service';

@Component({
  selector: 'app-house-detail',
  templateUrl: './house-detail.component.html',
  styleUrls: ['./house-detail.component.css']
})
export class HouseDetailComponent implements OnInit {
  house: House;
  currentPhoto;

  constructor(private userService: UserService, private route: ActivatedRoute,
    private router: Router, private authService: AuthService) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.house = data['house'];
    });
    this.currentPhoto = this.house.photoUrl;
    console.log(this.house);
  }

  setPhoto(url: string) {
    this.currentPhoto = url;
  }

  deleteHouse(id) {
    this.userService.deleteHouse(id, this.authService.decodedToken.nameid).subscribe((response: Response) => {
      this.router.navigate(['/houses']);
    }, error => {
      console.log(error);
    });
  }

}
