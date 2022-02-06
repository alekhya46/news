import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
news:any;
  constructor(private http : HttpClient) { }
  
  request(value){
    this.news = value;
    }
   
  header(){
    return this.http.get<any>(`https://newsapi.org/v2/everything?q=${this.news}&from=2021-11-19&sortBy=publishedAt&apiKey=009195ffc0a8488aa60a9e6ff5e5612b`);
  }
  // newsApiUrl = `https://newsapi.org/v2/everything?q=${this.news}&from=2021-11-19&sortBy=publishedAt&apiKey=009195ffc0a8488aa60a9e6ff5e5612b`

 


}
