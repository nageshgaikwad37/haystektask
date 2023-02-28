import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  
  title = 'haystektask';
  array:any= [];
  indexNumber:number= 0;
  baseUrl:string = environment.baseurl;
  constructor(private http:HttpClient){}
  ngOnInit(): void {
    this.getData()
    
    
  }

  getData(){
    this.http.get(this.baseUrl).subscribe(res => {
      this.array = res
    })
  }

  onnext(){
    this.indexNumber = (this.indexNumber + 1) % this.array.length;
  }
}
