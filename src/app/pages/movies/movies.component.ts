import { Component, OnInit } from '@angular/core';
import { Movie } from '../../models/movies';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  movies : Movie[] = []
  constructor(private movieService: MoviesService) { }

  ngOnInit(): void {
    this.getMoviePage(1)
  }

  getMoviePage(page:number){
    this.movieService.searchMovies(page).subscribe((movies) => {
      this.movies = movies;
    });
  }

  paginate(event: any){

    console.log(event);
    
    this.getMoviePage(event["page"] + 1);
  }

}
