import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ErrorMessageComponent } from 'src/app/components/common/error-message/error-message.component';
import { MatSnackBar } from '@angular/material';
import { SantoshInteriorService } from '../service/santosh-interior.service';

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
  constructor(private snackBar: MatSnackBar, private santoshInteriorService: SantoshInteriorService) { }

  ngOnInit() {
  }

  public sendMessage() {

    if (this.contactFormGroup.dirty && this.contactFormGroup.valid) {

      let name: string = this.contactFormGroup.controls.name.value;
      let regarding: string = this.contactFormGroup.controls.regarding.value;
      let contactNumber: number = this.contactFormGroup.controls.contactNumber.value;

      this.santoshInteriorService.addQuery(name, regarding, contactNumber);

      this.snackBar.openFromComponent(ErrorMessageComponent, {
        duration: 5000,
        data: { message: 'We got your query...Sit back...we will contact you...Thank You' }
      });
    }
  }
}
