import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ClientsService {
  constructor(private http: HttpClient) {}

  addClient(user: any): Observable<any> {
    return this.http
      .post('https://vtwhny.deta.dev/addClient/', user)
      .map((data) => console.log(data));
  }
}
