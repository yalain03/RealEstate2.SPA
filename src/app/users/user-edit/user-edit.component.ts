import { Component, OnInit } from '@angular/core';
import { User } from '../../_models/user';
import { UserService } from '../../_services/user.service';
import { AuthService } from '../../_services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  user: User;
  confirm: string;

  constructor(private route: ActivatedRoute, private userService: UserService,
    private router: Router, private authService: AuthService) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.user = data['user'];
    });
  }

  updateUser() {
    if(this.user.password != null && this.user.password === this.confirm) {
      this.userService.updateUser(this.user).subscribe((response: Response) => {
        this.router.navigate(['houses']);
      }, error => {
        console.log(error);
      });
    }
  }

}
