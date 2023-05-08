import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaFilmesPage } from './home.page';

describe('HomePage', () => {
  let component: ListaFilmesPage;
  let fixture: ComponentFixture<ListaFilmesPage>;

  beforeEach(async () => {
    fixture = TestBed.createComponent(ListaFilmesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
