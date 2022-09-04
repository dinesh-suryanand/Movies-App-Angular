import { Component, Input } from '@angular/core';
import { TvSeries } from 'src/app/models/tvseries';
import { Movie } from '../../models/movies';

@Component({
  selector: 'items-banner',
  templateUrl: './items-banner.component.html',
  styleUrls: ['./items-banner.component.scss']
})
export class ItemsBannerComponent {

  @Input() items: Movie[] = [];
  @Input() tvItems: TvSeries[] = [];
  @Input() title: string = '';
  // @Input() tvItems: TvSeries[]=[];
}
