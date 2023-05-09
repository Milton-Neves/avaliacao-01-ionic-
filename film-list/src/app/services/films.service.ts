import { Injectable } from '@angular/core';
import { Filmes } from '../model/films';

@Injectable({
  providedIn: 'root',
})
export class FilmsService {
  filmes: Filmes[];

  constructor() {
    this.filmes = [
      {
        titulo: 'Pulp Fiction: Tempo de Violência',
        diretor: 'Quentin Tarantino',
        origem: 'EUA',
        cartaz:
          'https://www.themoviedb.org/t/p/original/tptjnB2LDbuUWya9Cx5sQtv5hqb.jpg',
        ano: 1995,
      },
      {
        titulo: 'Ferris Buellers Day Off',
        diretor: 'John Hughes',
        origem: 'EUA',
        cartaz:
          'https://baixarbluray.com/wp-content/uploads/2022/03/ca1D6Pz9pGxPtCSMUodM6jIfbSp.jpg',
        ano: 1986,
      },
      {
        titulo: 'Stand By Me',
        diretor: 'Rob Reiner',
        origem: 'EUA',
        cartaz:
          'https://musicart.xboxlive.com/7/d9131100-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080',
        ano: 1986,
      },
      {
        titulo: 'Back to the Future',
        diretor: 'Robert Zemeckis',
        origem: 'EUA',
        cartaz:
          'https://upload.wikimedia.org/wikipedia/pt/9/97/BackFuturePoster.jpg',
        ano: 1985,
      },
    ];
  }

  getFilmes() {
    return this.filmes;
  }
}
