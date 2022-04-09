import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private httpClient: HttpClient) { }

  getImage(id:number): Observable<Blob>{
    return this.httpClient.get(`http://localhost:8081/movie/${id}/img`, {responseType: 'blob'});
  }
}
