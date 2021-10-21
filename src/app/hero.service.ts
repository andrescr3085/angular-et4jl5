import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { heroesList } from './data-heroes';

@Injectable()
export class HeroService {



  constructor() { }

  getHeroes(): Hero[] {
    return heroesList;
  }

}