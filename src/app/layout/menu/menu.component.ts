import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  User: any ;
  constructor(private localStorage: LocalStorageService) { }

  ngOnInit() {
    const user = this.localStorage.get('user')
    this.User = user;
    console.log(this.User);
    
  }
  logOut(){
    this.localStorage.remove('user');
    window.location.reload();
  }

}
