import { User } from './user';
import { Photo } from './photo';

export interface House {
    id: number;
    price: number;
    rooms: number;
    area: number;
    street: string;
    city: string;
    state: string;
    zip: string;
    user: User;
    userId: number;
    photoUrl: string;
    photos: Photo[];
    sold: boolean;
}
