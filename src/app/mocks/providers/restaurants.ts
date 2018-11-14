import { Injectable } from '@angular/core';

import { Restaurant } from '../../models/restaurant';

@Injectable()
export class Restaurants {
  restaurants: Restaurant[] = [];

  defaultItem: any = {
    'name': 'Burt Bear',
    'profilePic': 'assets/img/speakers/bear.jpg',
    'about': 'Burt is a Bear.',
  };


  constructor() {
    const restaurants = [
      {
        'name': 'Burguer King',
        'profilePic': 'assets/imgs/restaurants/burguer-king.png',
        'about': '1',
        'status': 0
      },
      {
        'name': 'Giraffas',
        'profilePic': 'assets/imgs/restaurants/giraffas.jpg',
        'about': '0,9',
        'status': 0
      },
      {
        'name': 'Mc Donalds',
        'profilePic': 'assets/imgs/restaurants/mc-donalds.jpg',
        'about': '2',
        'status': 1
      },
      {
        'name': 'Outback',
        'profilePic': 'assets/imgs/restaurants/outback.png',
        'about': '2,3',
        'status': 0
      },
      {
        'name': 'Pizza Hut',
        'profilePic': 'assets/imgs/restaurants/pizza-hut.png',
        'about': '3',
        'status': 0
      }
    ];

    for (const r of restaurants) {
      this.restaurants.push(new Restaurant(r));
    }
  }

  query(params?: any) {
    if (!params) {
      return this.restaurants;
    }

    return this.restaurants.filter((item) => {
      for (const key in params) {
        const field = item[key];
        if (typeof field === 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return item;
        } else if (field === params[key]) {
          return item;
        }
      }
      return null;
    });
  }

  add(rest: Restaurant) {
    this.restaurants.push(rest);
  }

  delete(rest: Restaurant) {
    this.restaurants.splice(this.restaurants.indexOf(rest), 1);
  }
}
