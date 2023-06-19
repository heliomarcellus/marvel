import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesComponent } from './movies.component';
import { SearchModule } from 'src/app/components/search/search.module';

@NgModule({
  declarations: [MoviesComponent],
  imports: [CommonModule, HttpClientModule, MoviesRoutingModule, SearchModule],
})
export class MoviesModule {}
