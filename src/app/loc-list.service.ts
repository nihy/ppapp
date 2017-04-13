import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Location } from './location';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class LocListService {
  private targetUrl = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=39.501877, -84.740266&' +'radius=50000&type=health&keyword=std+screening+birth+control&key=AIzaSyD-4vncNJKd6nylmxo04RwBGLRnPlpZvWI';

  constructor(private http: Http) { }

  getLocations(): Observable<Location[]> {
    return this.http.get(this.targetUrl)
                    .map(this.parseData)
                    .catch(this.catchErr);
      
  }

  private parseData(res: Response) {
    let data = res.json();
    console.log(data);
    return data.results || { };
  }

  private catchErr(error : Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
