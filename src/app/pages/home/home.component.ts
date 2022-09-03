import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movies';
import { MoviesService } from '../../services/movies.service';
// import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  popularMovies: Movie[] = [];
  upcomingMovies: Movie[] = [];
  topratedMovies: Movie[] = [];

  constructor(private moviesSerice: MoviesService) { }

  ngOnInit(): void {
    this.moviesSerice.getMovies('popular').subscribe((movies) =>{
      this.popularMovies = movies
      // console.log(this.movies)
    })
    this.moviesSerice.getMovies('top_rated').subscribe((movies) =>{
      this.topratedMovies = movies;
    })
    this.moviesSerice.getMovies('upcoming').subscribe((movies) =>{
      this.upcomingMovies = movies;
    })
  }

}
