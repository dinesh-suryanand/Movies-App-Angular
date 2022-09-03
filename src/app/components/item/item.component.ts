import { Component, Input, OnInit } from '@angular/core';
import {faStar} from '@fortawesome/free-solid-svg-icons'
import { IMAGE_SIZES } from '../../constants/image-sizes';
import { Movie } from '../../models/movies';

@Component({
  selector: 'item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input() itemData : Movie | null = null;
  
  imageSizes = IMAGE_SIZES;

  star = faStar;
  constructor() { }

  ngOnInit(): void {
    
  }

}
