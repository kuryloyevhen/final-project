import { Component } from '@angular/core';
import { UsersService } from '../../../../services/users.service';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.scss']
})

export class AllUsersComponent {

  constructor(private server: UsersService) { }


  users: Array<any> = [];
  sortedUsers: Array<any> = [];

  getUsers(){
    this.server.getUsers()
      .subscribe( (response) => this.users = response );

  }

  sortOldFirst() {
    this.users.sort( (a,b) => {
      return a.created_at - b.created_at;
    } );
  }

  sortNewFirst(){
    this.users.sort( (a,b) => {
      return b.created_at - a.created_at;
    } );
  }

  sortByDateRange(from: string, to: string){

    let fromDate = Date.parse(from);
    let toDate = Date.parse(to);
    console.log(fromDate);
    console.log(toDate);
    this.users.forEach( (elem, index, arr) => {
        if(elem.created_at >= fromDate && elem.created_at <= toDate) this.sortedUsers.push(elem);
    });
    console.log(this.sortedUsers);
  }

}
