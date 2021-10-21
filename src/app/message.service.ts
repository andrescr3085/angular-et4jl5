import { Injectable } from '@angular/core';
import { heroesList } from './data-heroes';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MessageService {


  messages: string[] = [];

  add(message: string) {
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }

}