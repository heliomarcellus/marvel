import { Component, OnInit, ViewChild } from '@angular/core';
import { SearchComponent } from 'src/app/components/search/search.component';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  @ViewChild(SearchComponent) searchComponent!: SearchComponent;
  movies: any[] = [];

  constructor() {}

  ngOnInit() {}
}
