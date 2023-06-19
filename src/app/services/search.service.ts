import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root',
})
export class MarvelService {
  private baseUrl = 'https://gateway.marvel.com/v1/public';
  private publicKey = '70a3088b7bc0c3dc26bbceea416a940e';
  private privateKey = '77f855e4111635703f5f66da0258ac286c192877';

  constructor(private http: HttpClient) {}

  getComics(): Observable<any> {
    const timestamp = Date.now().toString();
    const hash = this.generateHash(timestamp);
    const url = `${this.baseUrl}/comics?ts=${timestamp}&apikey=${this.publicKey}&hash=${hash}`;
    return this.http.get(url);
  }

  private generateHash(timestamp: string): string {
    const input = timestamp + this.privateKey + this.publicKey;
    const hash = CryptoJS.MD5(input).toString();
    if (hash === undefined) {
      throw new Error('Failed to generate hash');
    }
    return hash;
  }

  searchComics(searchTitle: string): Observable<any> {
    const timestamp = Date.now().toString();
    const hash = this.generateHash(timestamp);
    const url = `${this.baseUrl}/comics?titleStartsWith=${encodeURIComponent(
      searchTitle
    )}&ts=${timestamp}&apikey=${this.publicKey}&hash=${hash}`;
    return this.http.get(url);
  }
}
