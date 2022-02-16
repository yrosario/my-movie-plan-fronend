import { MovieEntity } from 'src/app/entity/movie-entity';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessengerService {

  subject = new Subject();

  constructor() { }

  //sendMsg will be call from movie item
  sendMsg(movie: MovieEntity){
    this.subject.next(movie);
  }

  //send
  getMsg(){
    return this.subject.asObservable();
  }
}
