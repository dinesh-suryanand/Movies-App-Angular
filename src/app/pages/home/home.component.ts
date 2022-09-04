import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movies';
import { TvSeriesService } from '../../services/tv-series.service';
import { MoviesService } from '../../services/movies.service';
import { TvSeries } from '../../models/tvseries';
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

  popularTvSeries: TvSeries[] = [];
  topratedTvSeries: TvSeries[] = [];

  constructor(private moviesSerice: MoviesService , private tvSeresService: TvSeriesService) { }

  ngOnInit(): void {
    this.moviesSerice.getMovies('popular').subscribe((movies) =>{
      this.popularMovies = movies
      // console.log(this.popularMovies)
    });
    this.moviesSerice.getMovies('top_rated').subscribe((movies) =>{
      this.topratedMovies = movies;
    });
    this.moviesSerice.getMovies('upcoming').subscribe((movies) =>{
      this.upcomingMovies = movies;
    });

    //tv series
    this.tvSeresService.getTvSeries().subscribe((res:any) =>{
      this.popularTvSeries = res.results;
      
    })
    this.tvSeresService.getTvSeries('top_rated').subscribe((tvSeries: any) => {
      this.topratedTvSeries = tvSeries.results;
    });
  }

}
