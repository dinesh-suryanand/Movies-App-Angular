import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { MovieDto } from '../models/movies';
import { switchMap } from 'rxjs/operators'
import { of } from 'rxjs'
 
@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  baseUrl: string ='https://api.themoviedb.org/3';
  apiKey: string ='2fe5629241bfd3560ed03032c5a4e00b';

  constructor(private http: HttpClient) { }

  getMovies(type:string ='upcoming'){
    return this.http.get<MovieDto>(`${this.baseUrl}/movie/${type}?api_key=${this.apiKey}`)
              .pipe(switchMap(res =>{
                return of (res.results.slice(0,12))
              }));
    // return this.http.get('https://api.themoviedb.org/3/movie/upcoming?api_key=2fe5629241bfd3560ed03032c5a4e00b')
  }
}
