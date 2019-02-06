import { Component, OnInit } from '@angular/core';
import { DataShareService } from '../services/data-share.service';

@Component({
  selector: 'app-alert-dialog',
  templateUrl: './alert-dialog.component.html',
  styleUrls: ['./alert-dialog.component.scss']
})
export class AlertDialogComponent implements OnInit {

  message: string;
  value: number;

  constructor(private dataShareService: DataShareService) { }

  ngOnInit() {
    this.value = this.dataShareService.value;
    let result = this.dataShareService.validationResult;
    if(result) {
      this.message = `The given value ${this.value} is Prime 🙂!!`;
    } else {
      this.message = `The given value ${this.value} is not Prime 🙁!!`;
    }
  }

}
