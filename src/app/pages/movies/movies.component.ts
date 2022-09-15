import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs';
import { Movie } from '../../models/movies';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  movies : Movie[] = []
  constructor(private movieService: MoviesService , private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.pipe(take(1)).subscribe(({genreId}) => {
      if(genreId){
        this.getMoviesByGenere(genreId);
      } else {
        this.getMoviePage(1)
      }
    })
    
  }

  getMoviePage(page:number){
    this.movieService.searchMovies(page).subscribe((movies) => {
      this.movies = movies;
    });
  }

  getMoviesByGenere(genreId: string){
     this.movieService.getMoviesByGenre(genreId).subscribe(moviesData => {
      this.movies = moviesData;
     })
  }

  paginate(event: any){

    console.log(event);
    
    this.getMoviePage(event["page"] + 1);
  }

}
