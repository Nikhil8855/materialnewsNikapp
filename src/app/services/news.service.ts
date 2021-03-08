import { Injectable,Input  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class NewsService {

  apiKey = 'a70b3c7e34d34ae9897092a516fe6639'; //a70b3c7e34d34ae9897092a516fe6639 my api key

  constructor(private http: HttpClient) { }

  getArticles(){
    return this.http.get('https://newsapi.org/v2/top-headlines?country=in&apiKey=' + this.apiKey);
  }
//http://newsapi.org/v2/top-headlines?country=in&apiKey=a70b3c7e34d34ae9897092a516fe6639
 getArticleByID(source: string,){
    return this.http.get('https://newsapi.org/v2/top-headlines?source=' + source + '&apiKey=' + this.apiKey);
  }

}
