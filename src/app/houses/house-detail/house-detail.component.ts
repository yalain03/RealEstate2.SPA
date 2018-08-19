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
    this.photosUrls = this.house.photos;
  }

  setPhoto() {
    this.currentPhoto = this.photosUrls[this.index].url;
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
      alert(error);
    });
  }

  deletePhoto(id) {
    if(confirm('Delete?')) {
      this.userService.deletePhoto(this.house.id, id).subscribe(() => {
        location.reload();
      }, error => {
        alert(error);
      });
    } 
  }

  // setMain(id) {
  //   if(confirm('Set Main Photo?')) {
  //     return this.userService.setMainPhoto(this.house.id, id).subscribe((response: Response) => {
  //       // location.reload();
  //       alert(response);
  //     }, error => {
  //       alert(error);
  //     });
  //   }
  // }

  loggedIn() {
    return this.authService.loggedIn();
  }

}
