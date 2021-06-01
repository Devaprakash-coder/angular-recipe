import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs'
import { map } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class ServService {
  data: any[] = [];
  realColors: any[] = [];
  constructor(private http: HttpClient) {}
  getdata(value: any): Observable<any> {
    this.data.push(value);
    this.realColors = this.data.filter(function (e: any) { return e != ""; });
    return this
      .http
      .get(`http://www.recipepuppy.com/api/?i=` + `${this.realColors}`)
      .pipe(
        map(data => data)
      );
  }
}
