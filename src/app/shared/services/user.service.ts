import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable, pipe } from 'rxjs';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { IUser } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: Http, private router: Router) { }
  getUSers() : Observable<any[]>{
    const url = "https://api.myjson.com/bins/e0wkg";
    return this.http.get(url).pipe(map(data=>{
      console.log(data);     
      return data.json();
    }))
  }
  checkLogin(email: String, password: String): Observable<any>{
    return this. getUSers().pipe(map(users => {
      return users.find(user => {
        return user.email === email && user.password === password;
      });
    }));

  }
}
