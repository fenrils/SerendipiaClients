import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ClientsService {
  constructor(private http: HttpClient) {}

  addClient(user: any): Observable<any> {
    console.log(JSON.stringify(user));
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    let options = { headers: headers };
    return this.http.post('https://vtwhny.deta.dev/addClient/', user, options);
  }
}
