import { Injectable } from '@angular/core';

@Injectable()

export class GatewayService {

  constructor() { }

  authorized: boolean = false;
  adminRoot: boolean = false;
  hide: string = 'registration';

}
