import { Component, OnInit } from '@angular/core';
import { MarvelService } from './../../services/search.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  searchTitle: any;
  comics: any[] | undefined;

  constructor(private marvelService: MarvelService) {}
  allCharacters: Observable<any> | undefined;

  ngOnInit(): void {}

  search() {
    this.marvelService.searchComics(this.searchTitle).subscribe((data) => {
      const filteredComics = data.data.results.filter((comic: any) => {
        const comicTitle = comic.title.toLowerCase();
        const searchKeyword = this.searchTitle.toLowerCase();
        return comicTitle.includes(searchKeyword);
      });

      this.comics = filteredComics;
    });
  }
}
