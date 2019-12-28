import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  public errorMessage = 'Kindly fill this feild';

  public contactFormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.nullValidator]),
    regarding: new FormControl('', [Validators.required, Validators.nullValidator]),
    contactNumber: new FormControl('', [Validators.required, Validators.nullValidator]),
  });
  constructor() { }

  ngOnInit() {
  }

  public sendMessage() {
  }

}
