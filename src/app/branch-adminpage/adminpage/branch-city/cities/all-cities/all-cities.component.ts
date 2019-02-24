import { Component, OnInit, OnDestroy  } from '@angular/core';
import * as Rx from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CitiesService } from '../../../../../services/cities.service';

@Component({
  selector: 'app-all-cities',
  templateUrl: './all-cities.component.html',
  styleUrls: ['./all-cities.component.scss']
})
export class AllCitiesComponent implements OnInit, OnDestroy  {

  constructor(private server: CitiesService) { }

  private unsubscribe: Rx.Subject<void> = new Rx.Subject();

  ngOnInit() {
      this.server.getCities().pipe(takeUntil(this.unsubscribe))
        .subscribe( (response) => this.cities = response.Items );
  }

    cities: Array<any> = [];

    removeCity(id: string) {
      this.server.removeCity(id).pipe(takeUntil(this.unsubscribe))
        .subscribe();
    }

    ngOnDestroy() {
      this.unsubscribe.next();
      this.unsubscribe.complete();
    }

}
