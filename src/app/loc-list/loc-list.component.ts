import { Component, OnInit } from '@angular/core';
import { LocListService } from '../loc-list.service';

@Component({
  selector: 'app-loc-list',
  templateUrl: './loc-list.component.html',
  styleUrls: ['./loc-list.component.css']
})
export class LocListComponent implements OnInit {
  locations: Location[];
  constructor(private locService: LocListService) { }

  ngOnInit() {
    this.getLocations();
  }

  getLocations() {
    this.locService.getLocations().subscribe(locations => this.locations);
  }

}
