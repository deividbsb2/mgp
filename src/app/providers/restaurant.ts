import { Injectable } from '@angular/core';

import { Api } from './api';
import { Restaurant } from '../models/restaurant';

@Injectable()
export class Restaurants {

  constructor(public api: Api) { }

  query(params?: any) {
    return this.api.get('/restaurants', params);
  }

  add(restaurant: Restaurant) {
  }

  delete(restaurant: Restaurant) {
  }

}
