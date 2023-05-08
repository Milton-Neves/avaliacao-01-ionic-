import { Component } from '@angular/core';
import { FilmsService } from '../services/films.service';
import { Filmes } from '../model/films';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,

  imports: [IonicModule],
})
export class ListaFilmesPage {
  filmes!: Filmes[];

  constructor(private filmeService: FilmsService) {}

  ionViewWillEnter() {
    this.filmes = this.filmeService.getFilmes();
  }
}
