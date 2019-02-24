import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import * as Rx from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { DialogComponent } from './dialog.component';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { CentersService } from '../../../../../services/centers.service';
import { CitiesService } from '../../../../../services/cities.service';
declare var ol: any;

@Component({
  selector: 'app-all-centers',
  templateUrl: './all-centers.component.html',
  styleUrls: ['./all-centers.component.scss']
})
export class AllCentersComponent implements OnInit, OnDestroy {

  constructor(private server: CentersService,
              private citiesService: CitiesService,
              public dialog: MatDialog) { }


  private unsubscribe: Rx.Subject<void> = new Rx.Subject();
  map: any;
  mapDefaultZoom: number = 11;
  mapLat: number;
  mapLon: number;
  cities: Array<any>;
  centers: Array<any>;
  center: Object;
  bikesCount = 0;

  updateCenterId: string;

  ngOnInit() {
      this.map = new ol.Map({
        target: 'map',
        layers: [
          new ol.layer.Tile({
            source: new ol.source.OSM()
          })
        ],
        view: new ol.View({
          center: ol.proj.fromLonLat([30.516382, 50.431782]),
          zoom: this.mapDefaultZoom
        })
      });
  }

  addMarker(markerLat: string, markerLon:string){
      let layerName = new ol.layer.Vector({
      source:new ol.source.Vector({
        features: [new ol.Feature({
          geometry: new ol.geom.Point(ol.proj.transform([parseFloat(markerLon), parseFloat(markerLat)], 'EPSG:4326', 'EPSG:3857')),
        })]
      }),
      style: new ol.style.Style({
        image: new ol.style.Icon({
          anchor: [0.5, 0.5],
          anchorXUnits: "fraction",
          anchorYUnits: "fraction",
          src: "https://upload.wikimedia.org/wikipedia/commons/e/ec/RedDot.svg"
        })
      })
    });
    this.map.addLayer(layerName);
}

showCenters(cityName: string, centers){
  this.citiesService.getCities().pipe(takeUntil(this.unsubscribe))
    .subscribe( (response) => {
      this.cities = response.Items;
      for(let city of this.cities){
        if(city.city == cityName){
          this.mapLat = city.location.lat;
          this.mapLon = city.location.lon;
        }
      }
      let view = this.map.getView();
      view.setCenter(ol.proj.fromLonLat([+this.mapLon, +this.mapLat]));
      view.setZoom(10);
    } );
    this.server.getCenters(cityName).pipe(takeUntil(this.unsubscribe))
      .subscribe( (response) => {
        this.centers = response.Items;
        for(let center of this.centers){
          this.addMarker(center.location.lat, center.location.lon );
        }
      });
    }

  removeCenter(id: string){
    this.server.removeCenter(id).pipe(takeUntil(this.unsubscribe))
      .subscribe( );
  }

  openModal(centerId) {
    this.server.centerId = centerId;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      id:1,
      title: 'Update center form'
    };
    const dialogRef = this.dialog.open( DialogComponent, dialogConfig );
    dialogRef.afterClosed().subscribe();
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }



}
