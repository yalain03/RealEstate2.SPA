import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HouseListComponent } from './houses/house-list/house-list.component';
import { HouseDetailComponent } from './houses/house-detail/house-detail.component';
import { HouseCreateComponent } from './houses/house-create/house-create.component';
import { HouseEditComponent } from './houses/house-edit/house-edit.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './_guards/auth.guard';
import { HouseDetailResolver } from './_resolvers/house-detail.resolver';
import { HouseListResolver } from './_resolvers/house-list.resolver';
import { HousePhotoComponent } from './houses/house-photo/house-photo.component';
import { UserEditComponent } from './users/user-edit/user-edit.component';
import { UserDetailResolver } from './_resolvers/user-detail.resolver';
import { UserPhotoComponent } from './users/user-photo/user-photo.component';

export const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent },
    { path: 'houses', component: HouseListComponent, resolve: {houses: HouseListResolver} },
    { path: 'house/detail/:id', component: HouseDetailComponent, resolve: {house: HouseDetailResolver} },
    {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [AuthGuard],
        children: [
            { path: 'house/create', component: HouseCreateComponent },
            { path: 'house/edit/:id', component: HouseEditComponent, resolve: {house: HouseDetailResolver} },
            { path: 'house/photo/:id', component: HousePhotoComponent },
            { path: 'users/:id/edit', component: UserEditComponent, resolve: {user: UserDetailResolver}},
            { path: 'users/:id/photo', component: UserPhotoComponent },
        ]
    },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];