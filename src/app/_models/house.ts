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
    user: User;
    photos: Photo[];
}
