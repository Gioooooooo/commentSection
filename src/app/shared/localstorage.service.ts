import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalstorageService {
  constructor() {}

  get() {
    const storage = localStorage.getItem('comments');
    if (storage) {
      return JSON.parse(storage);
    }
    return null;
  }
  set(commentsData: any) {
    localStorage.setItem('comments', JSON.stringify(commentsData));
  }
}
