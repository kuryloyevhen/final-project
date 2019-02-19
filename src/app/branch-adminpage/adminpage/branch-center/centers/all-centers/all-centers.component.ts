import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CentersService } from '../../../../../services/centers.service';
import { CitiesService } from '../../../../../services/cities.service';
declare var ol: any;


@Component({
  selector: 'app-all-centers',
  templateUrl: './all-centers.component.html',
  styleUrls: ['./all-centers.component.scss']
})
export class AllCentersComponent implements OnInit {

  constructor(private server: CentersService,
              private citiesService: CitiesService,
              private fb: FormBuilder) { }



  map: any;
  mapDefaultZoom: number = 11;
  mapLat: number;
  mapLon: number;
  cities: Array<any>;
  centers: Array<any>;
  center: Object;
  bikesCount = 0;

  checkedCenterId: string;
  updateCenterId: string;

  updateCenterForm = this.fb.group({
    bikesCount: [this.bikesCount],
    cost: [0],
    refundDeposit: [0]
  })


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
  this.citiesService.getCities().subscribe( (response) => {
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
    this.server.getCenters(cityName)
      .subscribe( (response) => {
        this.centers = response.Items;
        console.log(this.centers);
        for(let center of this.centers){
          this.addMarker(center.location.lat, center.location.lon );
        }
      } );


}

  removeCenter(id: string){
    console.log(id);
    this.server.removeCenter(id)
      .subscribe( (response) => {
        console.log(response);
      } );
  }


  updateCenter(centerId) {
    this.server.updateCenter(centerId, this.updateCenterForm.value)
      .subscribe( (response) => console.log(response) );
  }

  toUpdateForm(city, centerId) {
    if(this.updateCenterId == centerId) this.updateCenterId = '';
    else {
      this.updateCenterId = centerId;
      this.checkedCenterId = '';
      this.server.getCenter(city, centerId)
        .subscribe( (response) => { this.center = response; console.log(this.center); } );
    }
  }

  showCenterInfo(centerId) {
    if(this.checkedCenterId == centerId) this.checkedCenterId = '';
    else { this.checkedCenterId = centerId; this.updateCenterId = ''; }
  }



}
