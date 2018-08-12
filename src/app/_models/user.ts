import { Photo } from './photo';

export interface User {
    id: number;
    username: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    gender: string;
    photo: Photo;
    dateOfBirth: Date;
    password: string;
}
