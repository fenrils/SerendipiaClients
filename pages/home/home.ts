import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CreateClient } from '../create-client/create-client';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController) {}

  navCreateClient() {
    this.navCtrl.push(CreateClient);
  }
}
