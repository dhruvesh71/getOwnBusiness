import { Component, OnInit, ErrorHandler, ViewChild } from '@angular/core';
import { IOurClientData } from 'src/app/interfaces/our-clients-data';
import { SantoshInteriorService } from '../service/santosh-interior.service';
import { MatSnackBar, MatTableDataSource, MatPaginator } from '@angular/material';
import { ErrorMessageComponent } from 'src/app/components/common/error-message/error-message.component';
import { MatDialog } from '@angular/material/dialog';
import { SantoshInteriorClientDetailsComponent } from '../santosh-interior-client-details/santosh-interior-client-details.component';

@Component({
  selector: 'app-santosh-interior-our-clients',
  templateUrl: './santosh-interior-our-clients.component.html',
  styleUrls: ['./santosh-interior-our-clients.component.scss'],
})
export class SantoshInteriorOurClientsComponent implements OnInit {

  public ourClients: IOurClientData[];
  public ourClientsLocation: string[];
  private ourClientsForSpecificLocation: IOurClientData[];

  constructor(private santoshService: SantoshInteriorService, private snackBar: MatSnackBar, private matDialog: MatDialog) { }

  ngOnInit() {
    this.getClientDetails();
  }

  public openClientDetails(client: IOurClientData): void {
    this.matDialog.open(SantoshInteriorClientDetailsComponent, {
      height: '90%',
      data: { client: client, imagesUrl: client.imageUrl },
    });
  }

  public getClientsByLocation(clientsLocation: string): IOurClientData[] {

    this.ourClientsForSpecificLocation = [];

    this.ourClients.forEach(client => {

      if (client.location === clientsLocation) {
        this.ourClientsForSpecificLocation.push(client);
      }
    });

    return this.ourClientsForSpecificLocation;
  }


  private getClientDetails() {

    this.santoshService.getSantoshInteriorOurClientsComponentData().subscribe(result => {
      this.ourClients = result;
      this.getClientsLocation();
    },
      _err => {
        this.snackBar.openFromComponent(ErrorMessageComponent, { data: { message: 'Error occured while processing..Kindly try again in sometime' } });
      });
  }

  private getClientsLocation() {

    this.ourClientsLocation = [];

    for (const client of this.ourClients) {

      if (!(this.ourClientsLocation.includes(client.location))) {
        this.ourClientsLocation.push(client.location);
      }
    }
  }
}
