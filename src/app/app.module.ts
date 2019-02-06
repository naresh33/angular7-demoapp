import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AlertDialogComponent } from './alert-dialog/alert-dialog.component';
import { DataShareService } from './services/data-share.service';

@NgModule({
  declarations: [
    AppComponent,
    AlertDialogComponent
  ],
  entryComponents: [AlertDialogComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  providers: [DataShareService],
  bootstrap: [AppComponent]
})
export class AppModule { }
