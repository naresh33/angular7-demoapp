import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AlertDialogComponent } from './alert-dialog/alert-dialog.component';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DataShareService } from './services/data-share.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  dialogRef;
  validateForm: FormGroup;

  constructor(private dialog: MatDialog,
    private dataShareService: DataShareService) {
  }

  ngOnInit() {
    this.validateForm = new FormGroup({
      inputValue: new FormControl('', { validators: [Validators.required, Validators.pattern('^[0-9]*$')] }),
    });
  }

  showAlert(result?: string) {
    console.log('Validation result: ' , result);
    this.dialogRef = this.dialog.open(AlertDialogComponent);
    this.dialogRef.afterClosed().subscribe(result => {
      if (result == 'confirm') {
        console.log('closed!');
      }
    })
  }

  validateIsPrime() {
    console.log('input value: ', this.validateForm.value.inputValue);
    const number = this.validateForm.value.inputValue;
    this.dataShareService.value = number;
    let i, flag = 0;
    let result;
    for (i = 2; i <= number / 2; i++) {
      if (number % i == 0) {
        flag = 1;
        break;
      }
    }
    if (flag == 0) {
      result = 'The given input value is Prime';
      this.dataShareService.validationResult = true;
      this.showAlert(result);
    }
    else {
      this.dataShareService.validationResult = false;
      this.showAlert(result);
    }
  }

  clear() {
    this.validateForm.reset();
  }

}
