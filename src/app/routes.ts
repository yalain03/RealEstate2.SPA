import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HouseListComponent } from './houses/house-list/house-list.component';
import { HouseDetailComponent } from './houses/house-detail/house-detail.component';
import { HouseCreateComponent } from './houses/house-create/house-create.component';
import { HouseEditComponent } from './houses/house-edit/house-edit.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

export const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent },
    { path: 'houses', component: HouseListComponent },
    { path: 'house/detail', component: HouseDetailComponent },
    { path: 'house/create', component: HouseCreateComponent },
    { path: 'house/edit', component: HouseEditComponent },
    { path: '**', redirectTo: 'home', pathMatch: 'full' }
];