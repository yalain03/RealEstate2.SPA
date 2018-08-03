import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router, ActivatedRouteSnapshot } from '../../../../node_modules/@angular/router';
import { UserService } from '../../_services/user.service';
import { Photo } from '../../_models/photo';
import { FileUploader } from 'ng2-file-upload';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-house-photo',
  templateUrl: './house-photo.component.html',
  styleUrls: ['./house-photo.component.css']
})
export class HousePhotoComponent implements OnInit {
  houseId: number;
  public uploader: FileUploader;
  public hasBaseDropZoneOver = false;
  public hasAnotherDropZoneOver = false;
  baseUrl = environment.apiUrl;

  constructor(private activatedRoute: ActivatedRoute, private userService: UserService,
    private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.houseId = +params['id'];
    });
    this.initializeUploader();
  }

  fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }
 
  fileOverAnother(e: any): void {
    this.hasAnotherDropZoneOver = e;
  }

  initializeUploader() {
    this.uploader = new FileUploader({
      url: this.baseUrl + 'houses/' + this.houseId + '/photos',
      authToken: 'Bearer ' + localStorage.getItem('token'),
      isHTML5: true,
      allowedFileType: ['image'],
      removeAfterUpload: true,
      autoUpload: false,
      maxFileSize: 10 * 1024 * 1024
    });

    this.uploader.onAfterAddingFile = (file) => {file.withCredentials = false; };

    this.uploader.onSuccessItem = (item, response, status, headers) => {
      this.router.navigate(['/home']);
    //   if(response) {
    //     const res: Photo = JSON.parse(response);
    //     const photo = {
    //       id: res. id,
    //       url: res.url,
    //       isMain: res.isMain,
    //       publicId: res.publicId
    //     };

    //   }
    }
  }

}
