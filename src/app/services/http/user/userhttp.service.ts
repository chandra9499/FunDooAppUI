import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserhttpService {
  url:string="https://localhost:7072/api/User";
  
  constructor(private httpClient: HttpClient) { }

  postService(endpoint: string, data: any):Observable<any> {
     return this.httpClient.post(`${this.url}/${endpoint}`,data);
  }
}
