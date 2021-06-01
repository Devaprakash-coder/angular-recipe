import { Component,Input } from '@angular/core';
import { Observable, observable } from 'rxjs'
import { ServService } from '../serv.service'
import { filter } from 'rxjs/operators';
@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent {
  posts$:any[]=[];
  
  constructor(public servService: ServService ){}

  ngOnInit(){    
    this.servService.getdata('')
    .subscribe((res) => {
      console.log(res)
      if(res.results.length==0){
        alert("NOT FOUND")
      }else{
      this.posts$ = res.results;
      }
      console.log(this.posts$)
    })
  }
}
