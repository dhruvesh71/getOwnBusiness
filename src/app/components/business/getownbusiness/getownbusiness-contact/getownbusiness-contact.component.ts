import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { SantoshInteriorService } from '../../santosh-interior/service/santosh-interior.service';
import { ErrorMessageComponent } from 'src/app/components/common/error-message/error-message.component';
import { GetownbusinessService } from '../service/getownbusiness.service';

@Component({
  selector: 'app-getownbusiness-contact',
  templateUrl: './getownbusiness-contact.component.html',
  styleUrls: ['./getownbusiness-contact.component.scss']
})
export class GetownbusinessContactComponent implements OnInit {

  public errorMessage = 'Kindly fill this feild';

  public contactFormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.nullValidator]),
    regarding: new FormControl('', [Validators.required, Validators.nullValidator]),
    contactNumber: new FormControl('', [Validators.required, Validators.nullValidator]),
  });

  constructor(private snackBar: MatSnackBar, private getOwnBusinessService: GetownbusinessService) { }

  ngOnInit() {
  }

  public sendMessage() {

    if (this.contactFormGroup.dirty && this.contactFormGroup.valid) {

      let name: string = this.contactFormGroup.controls.name.value;
      let regarding: string = this.contactFormGroup.controls.regarding.value;
      let contactNumber: number = this.contactFormGroup.controls.contactNumber.value;

      this.getOwnBusinessService.addQuery(name, regarding, contactNumber);

      this.snackBar.openFromComponent(ErrorMessageComponent, {
        duration: 5000,
        data: { message: 'We got your query...Sit back...we will contact you...Thank You' }
      });
    }
  }
}
