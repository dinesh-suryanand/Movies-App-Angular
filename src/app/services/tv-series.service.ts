import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TvSeriesService {
  baseUrl:string = "https://api.themoviedb.org/3/tv/";
  apiKey:string = "2fe5629241bfd3560ed03032c5a4e00b";


  constructor(private http: HttpClient) { }

  getTvSeries(type:string ='popular'){
    // return this.http.get("https://api.themoviedb.org/3/tv/popular?api_key=2fe5629241bfd3560ed03032c5a4e00b")
    // let ans = this.http.get(`${this.baseUrl}/tv/${type}?api_key=${this.apiKey}`);
    // console.log(ans);
    
    return this.http.get(`${this.baseUrl}${type}?api_key=${this.apiKey}`);
  }
}
