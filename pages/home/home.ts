import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ClientDetail } from '../client-detail/client-detail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController) {}

  navCreateClient() {
    this.navCtrl.push(ClientDetail);
  }
}
