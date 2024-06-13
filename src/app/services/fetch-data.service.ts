import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Character } from '../models/chatacter';
import { DataFetch } from '../models/dataFetch';

@Injectable({
  providedIn: 'root',
})
export class FetchDataService {
  constructor(private http: HttpClient) {}

  getAllCharacters(): Observable<DataFetch> {
    return this.http.get<DataFetch>(
      'https://rickandmortyapi.com/api/character'
    );
  }

  getSpecificCharacter(id:string): Observable<Character> {
    return this.http.get<Character>(
      `https://rickandmortyapi.com/api/character/${id}`
    );
  }
}
