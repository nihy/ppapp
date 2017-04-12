import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LocListComponent } from './loc-list/loc-list.component';
import { LocListService } from './loc-list.service';

@NgModule({
  declarations: [
    AppComponent,
    LocListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [LocListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
