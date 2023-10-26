import { Component, OnDestroy } from '@angular/core';
import { User, UsersService } from './users.service';
import {
  Observable,
  Subscription,
  filter,
  first,
  forkJoin,
  interval,
  map,
  take,
} from 'rxjs';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent {
 users: User[] = [];
  users$: Observable<User[]>;
  counter = 0;

  loading = false;

  counterSubscription: Subscription = new Subscription();

  interval$ = interval()

  constructor(private usersService: UsersService) {
    this.users$ = this.usersService.getUsers();

    this.usersService
      .getCounter()
      .pipe(
        
        take(30),
        map((v) => v ),
        filter((v) => v > 3)
      )
      .subscribe({
        next: (v) => {
          this.counter = v;
        },
      });

    this.loading = true;
;

    this.usersService.getUsers().subscribe({
       next: (v) => {
         this.users = v;
       },
       error: (err) => {},
       complete: () => {},
     });
  }
   ngOnDestroy(): void {
     this.counterSubscription.unsubscribe();
   }
   
  }

 

 