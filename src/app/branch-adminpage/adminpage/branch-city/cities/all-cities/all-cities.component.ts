import { Component, OnInit, HostBinding } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { CitiesService } from '../../../../../services/cities.service';

@Component({
  selector: 'app-all-cities',
  animations: [
    trigger('openClosed', [
      state('open', style({
        display: 'block'
      })),
      state('closed', style({
        display: 'none'
      })),
      transition('open => closed', [
        animate('0s')
      ]),
      transition('closed => open', [
        animate('2s')
      ]),
    ]),
  ],
  templateUrl: './all-cities.component.html',
  styleUrls: ['./all-cities.component.scss']
})
export class AllCitiesComponent implements OnInit {

  constructor(private server: CitiesService) { }

  ngOnInit() {
      this.server.getCities()
        .subscribe( (response) => { this.cities = response.Items; console.log(response); });
  }

    cities: Array<any> = [];

    isOpen = false;

    toggle() {
      this.isOpen = !this.isOpen;
    }

    removeCity(id: string) {
      this.server.removeCity(id)
        .subscribe( (response) => console.log(response) );
    }

}
