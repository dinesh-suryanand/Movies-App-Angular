import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie, MovieCredits, MovieImages, MovieVideo, SimilarMovies } from '../../models/movies';
import { MoviesService } from '../../services/movies.service';
import { IMAGE_SIZES } from '../../constants/image-sizes';
import { first } from 'rxjs';


@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit , OnDestroy {
  
  movie: Movie | null = null;
  movieVideos: MovieVideo[] = [];
  movieImages: MovieImages | null = null;
  movieCredits: MovieCredits | null = null;
  similarMovies: SimilarMovies | null = null;
  imageSize = IMAGE_SIZES; //creating a class member to use in html

  constructor(private route:ActivatedRoute , private movieService:MoviesService) { }

  ngOnInit(): void {
    this.route.params.pipe(first()).subscribe(({id}) => {
      this.getMovie(id);
      this.getMovieVideos(id); 
      this.getMovieImages(id);
      this.getMovieCredits(id);
      this.getSimilarMovies(id);
    })
  }

  ngOnDestroy(): void {
  }

  getMovie(id: string){
    this.movieService.getMovie(id).subscribe(movieData => {
      this.movie = movieData;
    });
  }

  getMovieVideos(id: string){
    this.movieService.getMovieVideos(id).subscribe(movieVideoData => {
      this.movieVideos = movieVideoData;
    })
  }

  getMovieImages(id: string){
    this.movieService.getMovieImages(id).subscribe(movieImageData => {
      this.movieImages = movieImageData;
    })
  }

  getMovieCredits(id: string){
    this.movieService.getMovieCredits(id).subscribe(movieActorImageData => {
      this.movieCredits = movieActorImageData;
    })
  }

  getSimilarMovies(id: string){
    this.movieService.getSimilarMovies(id).subscribe(similarMovieData => {
      this.similarMovies = similarMovieData;
    })
    
  }
}
