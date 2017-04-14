import { Component, OnInit } from '@angular/core';
import { LocListService } from '../loc-list.service';
import { Location } from '../location';

@Component({
  selector: 'app-loc-list',
  templateUrl: './loc-list.component.html',
  styleUrls: ['./loc-list.component.css'],
  providers: [LocListService]
})
export class LocListComponent implements OnInit {
  private locations: Location[];
  constructor(public locService: LocListService) { }

  ngOnInit() {
    this.getLocations();
  }

  getLocations() {
    this.locService.getLocations()
      .subscribe(places => this.locations = places);
  }

}
