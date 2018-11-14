import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../../models/restaurant';
import { Restaurants } from '../../mocks/providers/restaurants';
import { NavController, ModalController } from '../../../../node_modules/@ionic/angular';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.scss']
})
export class RestaurantsComponent implements OnInit {
  currentRestaurants: Restaurant[];

  constructor(public navCtrl: NavController, public restaurants: Restaurants, public modalCtrl: ModalController) {
  }

  ngOnInit() {
    this.currentRestaurants = this.restaurants.query();
    console.log(this.currentRestaurants);
  }
}
