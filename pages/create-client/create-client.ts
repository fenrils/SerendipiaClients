import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'page-contact',
  templateUrl: 'create-client.html'
})
export class CreateClient {
  myForm: FormGroup;
  submitted = false;
  constructor(public navCtrl: NavController, public formBuilder: FormBuilder) {}

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$')
        ]
      ],
      dob: [],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]+$')]]
    });
  }

  fetchDate(e) {
    let date = new Date(e.target.value).toISOString().substring(0, 10);
    this.myForm.get('dob').setValue(date, {
      onlyself: true
    });
  }

  get errorCtr() {
    return this.myForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (!this.myForm.valid) {
      console.log('All fields are required.');
      return false;
    } else {
      console.log(this.myForm.value);
    }
  }
}
