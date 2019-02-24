import { Component, OnDestroy } from '@angular/core';
import * as Rx from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { UsersService } from '../../../../../services/users.service';

@Component({
  selector: 'app-find-user',
  templateUrl: './find-user.component.html',
  styleUrls: ['./find-user.component.scss']
})
export class FindUserComponent implements OnDestroy {

  constructor(private server: UsersService) { }

  private unsubscribe: Rx.Subject<void> = new Rx.Subject();

  user: Object;

  findUser(name: string = '', id: string = ''){
    this.server.getUsers().pipe(takeUntil(this.unsubscribe))
      .subscribe( (response) => {
        if(name && !id){
          for(let person of response){
            if(person.fullName == name) this.user = person;
          };
        };
        if(id && !name){
          for(let person of response){
            if(person.id == id) this.user = person;
          };
        };
        if(id && name){
          for(let person of response){
            if(person.id == id && person.fullName == name) this.user = person;
          };
        }
      });

  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

}
