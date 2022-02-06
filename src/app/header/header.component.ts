import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  value: any;
  
  constructor(private services: NewsService) {}
  displayData = [];
  

  ngOnInit(): void {
    
  }

  
  
  sendToService(){
    this.services.request(this.value); 
    this.services.header().subscribe((result)=>{
      console.log(result);
      console.log(result.articles);
      this.displayData = result.articles;
    })
  }
}
