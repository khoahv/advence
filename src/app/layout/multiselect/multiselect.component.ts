import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { UserService } from '../../shared/services/user.service';
import { interval } from 'rxjs';
import { bufferTime } from 'rxjs/operators';
@Component({
  selector: 'app-multiselect',
  templateUrl: './multiselect.component.html',
  styleUrls: ['./multiselect.component.scss']
})
export class MultiselectComponent implements OnInit {
  Users: any[]=[];
  check: Boolean;
  ArrayUserChoose: any[]=[];
  constructor(private userSV: UserService) { }

  ngOnInit() {
    this.userSV.getUSers().subscribe(data=>{
      this.Users = data;
    })
  }
    addArray(user){
      this.ArrayUserChoose.push(user)
      console.log(this.ArrayUserChoose);
      
      
    }
  
}
