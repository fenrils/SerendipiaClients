import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'page-contact',
  templateUrl: 'create-client.html'
})
export class CreateClient {
  constructor(public navCtrl: NavController) {}
}
