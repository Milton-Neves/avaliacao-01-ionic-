import { Component } from '@angular/core';
import { Filmes } from '../model/films';
import { FilmsService } from '../services/films.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  filmes!: Filmes[];

  constructor(private filmeService: FilmsService) {
    this.filmes = this.filmeService.getFilmes();
  }
}
