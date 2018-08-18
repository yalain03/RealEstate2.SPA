import { Component, OnInit } from '@angular/core';
import { House } from '../../_models/house';
import { UserService } from '../../_services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../_services/auth.service';
import { Photo } from '../../_models/photo';

@Component({
  selector: 'app-house-detail',
  templateUrl: './house-detail.component.html',
  styleUrls: ['./house-detail.component.css']
})
export class HouseDetailComponent implements OnInit {
  house: House;
  currentPhoto;
  index = 0;
  photosUrls = [];

  constructor(private userService: UserService, private route: ActivatedRoute,
    private router: Router, private authService: AuthService) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.house = data['house'];
    });
    this.currentPhoto = this.house.photoUrl;
    console.log(this.house);
    this.photosUrls = this.house.photos.map(item => item.url);
    // console.log(this.photosUrls);
  }

  setPhoto() {
    this.currentPhoto = this.photosUrls[this.index];
  }

  next() {
    if(this.index < this.photosUrls.length - 1) {
      this.index++;
    }
    this.setPhoto();
  }

  previous() {
    if(this.index > 0) {
      this.index--;
    }

    this.setPhoto();
  }

  deleteHouse(id) {
    this.userService.deleteHouse(id, this.authService.decodedToken.nameid).subscribe((response: Response) => {
      this.router.navigate(['/houses']);
    }, error => {
      console.log(error);
    });
  }

}
