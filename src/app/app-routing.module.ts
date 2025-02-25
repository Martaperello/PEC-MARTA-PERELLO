import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterListComponent } from './character-list/character-list.component';
import { CharacterDetailComponent } from './character-detail/character-detail.component';

const routes: Routes = [
  {path: '', component: CharacterListComponent},
  {path: 'character/:id', component: CharacterDetailComponent},
  {path: '**', component: CharacterListComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
