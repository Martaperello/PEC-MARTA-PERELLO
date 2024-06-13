import { Component, OnInit } from '@angular/core';
import { FetchDataService } from '../services/fetch-data.service';
import { Character } from '../models/chatacter';
import { Router } from '@angular/router';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrl: './character-list.component.css',
})
export class CharacterListComponent implements OnInit {
  characters: Character[] = [];
  displayedColumns: string[] = [
    'id',
    'name',
    'status',
    'gender',
    'species',
    'image',
  ];
  showList: boolean = false;
  showCards: boolean = true;
  isLoading: boolean = true;

  constructor(private fetchData: FetchDataService, private router:Router) {}

  ngOnInit(): void {
    this.fetchData
      .getAllCharacters()
      .subscribe((characters) => {
        this.characters = characters.results;
        this.isLoading = false;
      });
  }

  displayList(): void {
    this.showList = true;
    this.showCards = false;
  }

  displayCards(): void {
    this.showList = false;
    this.showCards = true;
  }

  goToCharacter(character: any) {
    this.router.navigate(['/character', character.id]);
  }
}
