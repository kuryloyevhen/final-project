import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GatewayService {

  constructor() { }

  authorized: boolean = false;
  adminRoot: boolean = false;

}
