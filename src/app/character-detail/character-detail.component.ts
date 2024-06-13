import { Component } from '@angular/core';
import { Character } from '../models/chatacter';
import { FetchDataService } from '../services/fetch-data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrl: './character-detail.component.css',
})
export class CharacterDetailComponent {
  character: Character = {
    id: 0,
    name: '',
    status: '',
    species: '',
    type: '',
    gender: '',
    origin: {
      name: '',
      url: '',
    },
    location: {
      name: '',
      url: '',
    },
    image: '',
    episode: [],
    url: '',
    created: '',
  };

  showInformation = false ;

  constructor(
    private fetchDataService: FetchDataService,
    private activateRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const identifier = this.activateRoute.snapshot.paramMap.get('id') as string;
    console.log('Identifier -->', identifier);
    if (identifier) {
      this.fetchDataService
        .getSpecificCharacter(identifier)
        .subscribe((character) => {
          console.log(character);

          if (!character) {
            this.router.navigateByUrl('/');
            return; // Explicitly return here to avoid TypeScript inferring a problem
          }

          this.character = character;

          console.log('Image -->', this.character);
        });
    }
  }

  handleGoBack() {
    this.router.navigateByUrl('/');
  }

  handleShowInfo() {
    this.showInformation = !this.showInformation;
  }
}
