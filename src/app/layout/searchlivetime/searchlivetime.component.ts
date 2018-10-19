import { Component, OnInit } from '@angular/core';
import {Subject} from 'rxjs'
import { debounceTime } from 'rxjs/operators';
import {SearchserviceService} from './../../shared/services/searchservice.service'
@Component({
  selector: 'app-searchlivetime',
  templateUrl: './searchlivetime.component.html',
  styleUrls: ['./searchlivetime.component.scss'],
  providers: [SearchserviceService]

})
export class SearchlivetimeComponent implements OnInit {
  results: any;
  date: any;
  searchTerm$ = new Subject<string>();
  constructor(private searchSV: SearchserviceService) { 
   
  }
  ngOnInit() {
    this.searchTerm$.pipe(debounceTime(1000)).subscribe((data)=>{
      console.log(data);
      var myVar = new Date();
      console.log(myVar);
      this.results = data;
      this.date = myVar;
    })
  }

}
