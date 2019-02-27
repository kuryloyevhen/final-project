import { Component, OnInit, OnDestroy } from '@angular/core';
import * as Rx from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { UsersService } from '../../../../../services/users.service';
import { User } from '../../../../../interfaces/user';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.scss']
})

export class AllUsersComponent implements OnInit, OnDestroy {

  constructor(private server: UsersService) { }

  private unsubscribe: Rx.Subject<void> = new Rx.Subject();

  ngOnInit(){
      this.server.getUsers().pipe(takeUntil(this.unsubscribe))
        .subscribe( (response) =>  {
        this.users = response;
        this.allUsers = response.length;
      });
  }

  users: Array<User> = [];
  checked: string = 'all';

  allUsers: number;
  sortedUsers: number;
  firstUser: Object;


  showAllUsers() {
    this.server.getUsers().pipe(takeUntil(this.unsubscribe))
      .subscribe( (response) =>  {
        this.users = response;
        this.checked = 'all';
        this.sortedUsers = undefined;
    });
  }

  sortOldFirst() {
    this.users.sort( (a,b) => {
      return a.created_at - b.created_at;
    } );
    this.checked = 'old';
  }

  sortNewFirst(){
    this.users.sort( (a,b) => {
      return b.created_at - a.created_at;
    } );
    this.checked = 'new';
  }

  sortByDateRange(from: string, to: string){
    this.server.getUsers().pipe(takeUntil(this.unsubscribe))
      .subscribe( (response) =>  {
      this.users = response;


    let fromDate, toDate;
    if(from && to){
      fromDate = Date.parse(from);
      toDate = Date.parse(to);
    } else if(from && !to){
      fromDate = Date.parse(from);
      toDate = Date.now();
    } else if(!from && to){
      let oldUsers = this.users;
      oldUsers.sort((a,b) => {
        return a.created_at - b.created_at;
      });
      fromDate = oldUsers[0].created_at;
      toDate = Date.parse(to);
    }
    this.users = this.users.filter( (elem) => {
        return (elem.created_at >= fromDate && elem.created_at <= toDate);
    });
    this.sortedUsers = this.users.length;
    this.checked = 'by date';
    });
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }


}
