import { Component } from '@angular/core';
import { UsersService } from '../../../../../services/users.service';

@Component({
  selector: 'app-find-user',
  templateUrl: './find-user.component.html',
  styleUrls: ['./find-user.component.scss']
})
export class FindUserComponent {

  constructor(private server: UsersService) { }

  user: Object;

  findUser(name: string = '', id: string = ''){
    this.server.getUsers()
      .subscribe( (response) => {
        if(name){
          for(let person of response){
            if(person.fullName == name) this.user = person;
          };
        };
        if(id){
          for(let person of response){
            if(person.id == id) this.user = person;
          };
        };
        console.log(this.user);
      });

  }

}
