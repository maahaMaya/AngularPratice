import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor() { }
  users() {
    return [
      { name: 'Anil', email: 'Anil@gmail.com', phone: '1234567890' },
      { name: 'Bhaker', email: 'Bhaker@gmail.com', phone: '1233465890' },
      { name: 'Sam', email: 'Sam@gmail.com', phone: '123237890' },
      { name: 'Peter', email: 'Peter@gmail.com', phone: '1233490' },
      { name: 'Burece', email: 'Burece@gmail.com', phone: '1245678934' }
    ]
  }
}
