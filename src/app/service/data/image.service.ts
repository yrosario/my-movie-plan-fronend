import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private httpClient: HttpClient) { }

  getImage(id:number){
    return this.httpClient.get(`http://movie/${id}/img`);
  }
}
