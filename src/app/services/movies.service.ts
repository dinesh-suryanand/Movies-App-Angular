import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { MovieDto, Movie, MovieVideoDto, MovieImages, MovieCredits, SimilarMovies } from '../models/movies';
import { switchMap } from 'rxjs/operators'
import { of } from 'rxjs'
import { GenresDto } from '../models/genere';

@Injectable({
  providedIn: 'root'
})

export class MoviesService {

  baseUrl: string = 'https://api.themoviedb.org/3';
  apiKey: string = '2fe5629241bfd3560ed03032c5a4e00b';

  constructor(private http: HttpClient) { }

  getMovies(type: string = 'upcoming', count: number = 12) {
    return this.http.get<MovieDto>(`${this.baseUrl}/movie/${type}?api_key=${this.apiKey}`)
      .pipe(switchMap(res => {
        return of(res.results.slice(0, count))
      }));
    // return this.http.get('https://api.themoviedb.org/3/movie/upcoming?api_key=asdfasdfa')
  }

  getMovieVideos(id: string) {
    return this.http.get<MovieVideoDto>(`${this.baseUrl}/movie/${id}/videos?api_key=${this.apiKey}`)
      .pipe(switchMap(res => {
        return of(res.results)
      }));
    // return this.http.get('https://api.themoviedb.org/3/movie/upcoming?api_key=adsfasdfa')
  };

  searchMovies(page: number = 1) {
    return this.http.get<MovieDto>(`${this.baseUrl}/movie/popular?page=${page}&api_key=${this.apiKey}`)
      .pipe(switchMap(res => {
        return of(res.results)
      }));
  };

  getMovie(id: string) {
    return this.http.get<Movie>(`${this.baseUrl}/movie/${id}?api_key=${this.apiKey}`);
  };

  getMovieImages(id: string) {
    return this.http.get<MovieImages>(`${this.baseUrl}/movie/${id}/images?api_key=${this.apiKey}`);
  };

  getMovieCredits(id: string){
    return this.http.get<MovieCredits>(`${this.baseUrl}/movie/${id}/credits?api_key=${this.apiKey}`);
  };
  
  getSimilarMovies(id: string){
    return this.http.get<SimilarMovies>(`${this.baseUrl}/movie/${id}/similar?api_key=${this.apiKey}`);
  };

  getMoviesGenre() {
    return this.http.get<GenresDto>(`${this.baseUrl}/genre/movie/list?api_key=${this.apiKey}`)
      .pipe(switchMap(res => {
        return of(res.genres)
      }));
  };

  getMoviesByGenre(genreId: string) {
    return this.http.get<MovieDto>(`${this.baseUrl}/discover/movie?with_genres=${genreId}&api_key=${this.apiKey}`)
      .pipe(switchMap(res => {
        return of(res.results)
      }));
    // return this.http.get('https://api.themoviedb.org/3/movie/upcoming?api_key=asdfasdfa')
  }

}
