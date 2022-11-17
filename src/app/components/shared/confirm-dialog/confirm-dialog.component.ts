import {Component, OnInit, Inject, Input} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {AgencyDialogComponent} from "../../../agencies/components/agency-dialog/agency-dialog.component";
import {TravelerDialogComponent} from "../../../travelers/components/traveler-dialog/traveler-dialog.component";
import {TransportDialogComponent} from "../../../transports/components/transport-dialog/transport-dialog.component";
import {PlanDialogComponent} from "../../../planes/components/plan-dialog/plan-dialog.component";

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent  {

  @Input() data: any | undefined;
  @Input() type: any | undefined;

  constructor(public dialog: MatDialog) {}

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    // @ts-ignore
    let component: any;
    console.log(this.data)
    let config = {
      width: '90vw',
      height: '750px',
      data: this.data,
      enterAnimationDuration,
      exitAnimationDuration,
    }

    switch(this.type) {
      case "agency":
        component = AgencyDialogComponent;
        break;
      case "traveler":
        component = TravelerDialogComponent;
        break
      case "transport":
        component = TransportDialogComponent;
        break
      case "plan":
        component = PlanDialogComponent;
        break
      default:
        component = AgencyDialogComponent;
    }

    this.dialog.open(component, config);
  }

}


