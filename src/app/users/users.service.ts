import { Injectable } from '@angular/core';
import { Observable, delay, interval, of } from 'rxjs';

export interface User {
  id: number;
  name: string;
}

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor() {}

  getCounter(): Observable<number> {
    return interval(1000);
  }

  
  getUsers(): Observable<User[]> {
    return new Observable((subscriber) => {
      subscriber.next([
        {
          id: 1,
          name: 'Inglés',
        },
        {
          id: 2,
          name: 'Francés',
        },{
          id: 3,
          name: 'Italiano',
        },{
          id: 4,
          name: 'Portugués',
        },{
          id: 5,
          name: 'Alemán',
        },
      ]);
      subscriber.complete();
    });
  }
}
