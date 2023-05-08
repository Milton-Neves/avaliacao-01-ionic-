import { Injectable } from '@angular/core';
import { Filmes } from '../model/films';

@Injectable({
  providedIn: 'root',
})
export class FilmsService {
  filmes: Filmes[];

  constructor() {
    this.filmes = [];
  }

  checkDuplicity(expenses: Filmes): boolean {
    if (this.filmes.find((element) => element === expenses)) {
      return true;
    }
    return false;
  }

  getFilmes(): Filmes[] {
    return this.filmes;
  }
}
