import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Genre } from '../../models/genere';

@Component({
  selector: 'app-genere',
  templateUrl: './genere.component.html',
  styleUrls: ['./genere.component.scss']
})
export class GenereComponent implements OnInit {

  genres: Genre[] =[];
  constructor(private moviesService : MoviesService) { }
  
  ngOnInit(): void {
    this.moviesService.getMoviesGenre().subscribe( genresData => {
      this.genres = genresData;
    });
  }

  // getGeneres(){
  //   this.moviesService.getGenere().subscribe( genresData => {
  //     this.generes = genresData;
  //     console.log(this.generes);
  //   });
  // };

}
