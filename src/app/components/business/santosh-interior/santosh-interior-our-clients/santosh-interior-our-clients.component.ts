import { Component, OnInit, ErrorHandler } from '@angular/core';
import { IOurClientData } from 'src/app/interfaces/our-clients-data';
import { SantoshInteriorService } from '../service/santosh-interior.service';
import { MatSnackBar } from '@angular/material';
import { ErrorMessageComponent } from 'src/app/components/common/error-message/error-message.component';

@Component({
  selector: 'app-santosh-interior-our-clients',
  templateUrl: './santosh-interior-our-clients.component.html',
  styleUrls: ['./santosh-interior-our-clients.component.scss']
})
export class SantoshInteriorOurClientsComponent implements OnInit {

  public ourClients: IOurClientData[];

  constructor(private santoshService: SantoshInteriorService, private snackBar: MatSnackBar) { }

  ngOnInit() {

    this.santoshService.getSantoshInteriorOurClientsComponentData().subscribe(result => {
      this.ourClients = result;
    },
      _err => {
        this.snackBar.openFromComponent(ErrorMessageComponent);
      });
  }

}
