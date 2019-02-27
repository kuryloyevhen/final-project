import { Component, OnInit, OnDestroy  } from '@angular/core';
import * as Rx from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CitiesService } from '../../../../../services/cities.service';
import { City } from '../../../../../interfaces/city';

@Component({
  selector: 'app-all-cities',
  templateUrl: './all-cities.component.html',
  styleUrls: ['./all-cities.component.scss']
})
export class AllCitiesComponent implements OnInit, OnDestroy  {

  constructor(private server: CitiesService) { }

  private unsubscribe: Rx.Subject<void> = new Rx.Subject();

  ngOnInit() {
      this.getCities();
  }

    cities: Array<City> = [];

    getCities() {
      this.server.getCities().pipe(takeUntil(this.unsubscribe))
        .subscribe( (response) => this.cities = response.Items );
    }

    removeCity(id: string, event, city: string) {
      event.stopPropagation();
      let isAgree = confirm(`You definitely want to delete ${city}?`);
      if(isAgree){
        this.server.removeCity(id).pipe(takeUntil(this.unsubscribe))
          .subscribe( () => this.getCities() );
      }
    }

    ngOnDestroy() {
      this.unsubscribe.next();
      this.unsubscribe.complete();
    }

}
