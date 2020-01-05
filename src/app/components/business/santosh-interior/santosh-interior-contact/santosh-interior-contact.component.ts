import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-santosh-interior-contact',
  templateUrl: './santosh-interior-contact.component.html',
  styleUrls: ['./santosh-interior-contact.component.scss']
})
export class SantoshInteriorContactComponent implements OnInit {

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
