import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Location } from './location';
@Injectable()
export class LocListService {
  locations: Location[] = [];
  
  constructor() { }

}
