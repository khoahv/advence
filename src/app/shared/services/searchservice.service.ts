import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';

import { debounceTime } from 'rxjs/operators';
import { distinctUntilChanged } from 'rxjs/operators';
import { switchMap } from 'rxjs/operators';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SearchserviceService {
  baseUrl: string = "https://api.myjson.com/bins/15k5r4";
  // queryUrl: string = '?search=';

  constructor(private http: Http) { }
  search(terms: Observable<string>) {
    return terms.pipe(debounceTime(400))
    .pipe(distinctUntilChanged())
      .pipe(switchMap(term => this.searchEntries(term)));    
  }
  getUSers() : Observable<any[]>{
    const url = "https://api.myjson.com/bins/15k5r4";
    return this.http.get(url).pipe(map(data=>{
      // console.log(data);     
      return data.json();
    }))
  }

  searchEntries(term) {
    return this.getUSers().pipe(map(users=>{
      return users.find(user=>{
        return user.name === term;
      })
    }))
  }
}
