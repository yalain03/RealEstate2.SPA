import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { JwtModule } from '@auth0/angular-jwt';
import { PaginationModule } from 'ngx-bootstrap';
import { FileUploadModule } from 'ng2-file-upload';
import { NgProgressModule } from '@ngx-progressbar/core';
import {SlideshowModule} from 'ng-simple-slideshow';
import { AuthGuard } from './_guards/auth.guard';

import { ErrorInterceptorProvider } from './_services/error.interceptor';

import { AppComponent } from './app.component';
import { ValueComponent } from './value/value.component';
import { NavComponent } from './nav/nav.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './_services/auth.service';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { appRoutes } from './routes';
import { HouseListComponent } from './houses/house-list/house-list.component';
import { HouseDetailComponent } from './houses/house-detail/house-detail.component';
import { HouseEditComponent } from './houses/house-edit/house-edit.component';
import { HouseCreateComponent } from './houses/house-create/house-create.component';
import { UserService } from './_services/user.service';
import { HouseDetailResolver } from './_resolvers/house-detail.resolver';
import { HouseListResolver } from './_resolvers/house-list.resolver';
import { HousePhotoComponent } from './houses/house-photo/house-photo.component';
import { UserDetailResolver } from './_resolvers/user-detail.resolver';
import { UserEditComponent } from './users/user-edit/user-edit.component';
import { UserPhotoComponent } from './users/user-photo/user-photo.component';

export function tokenGetter() {
    return localStorage.getItem('token');
}

@NgModule({
   declarations: [
      AppComponent,
      ValueComponent,
      NavComponent,
      LoginComponent,
      HomeComponent,
      RegisterComponent,
      HouseListComponent,
      HouseDetailComponent,
      HouseCreateComponent,
      HouseEditComponent,
      HousePhotoComponent,
      UserEditComponent,
      UserPhotoComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule,
      ReactiveFormsModule,
      RouterModule.forRoot(appRoutes),
      JwtModule.forRoot({
          config: {
              tokenGetter: tokenGetter,
              whitelistedDomains: ['localhost:5000'],
              blacklistedRoutes: [
                'localhost:5000/api/register', 'localhost:5000/api/login',
                'localhost:5000/api/houses', 'localhost:5000/api/register',
                'localhost:5000/api/houses/:id'
            ]
          }
      }),
      PaginationModule.forRoot(),
      FileUploadModule,
      NgProgressModule.forRoot(),
      SlideshowModule,
   ],
   providers: [
      AuthService,
      ErrorInterceptorProvider,
      AuthGuard,
      UserService,
      HouseDetailResolver,
      HouseListResolver,
      UserDetailResolver
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
