import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CreateClient } from '../create-client/create-client';
import { ClientsService } from '../../app/services/clients.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  constructor(
    public navCtrl: NavController,
    public clientsService: ClientsService
  ) {}

  ngOnInit() {
    // this.clientsService.getAllClients().subscribe((data) => {
    //   console.log(data);
    // });
  }

  navCreateClient() {
    this.navCtrl.push(CreateClient);
  }
}
