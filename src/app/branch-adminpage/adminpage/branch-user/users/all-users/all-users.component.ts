import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../../../services/users.service';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.scss']
})

export class AllUsersComponent implements OnInit{

  constructor(private server: UsersService) { }

  ngOnInit(){
      this.server.getUsers()
        .subscribe( (response) =>  this.users = response );
  }

  users: Array<any> = [];
  sortedUsers: Array<any> = [];


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
    this.users = this.users.filter( (elem) => {
        return (elem.created_at >= fromDate && elem.created_at <= toDate);
    });
  }

}
