import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

import { user } from '../Entityclass/user';
@Injectable()
export class userInformService {

  constructor(private http: Http) {}

  login(username: string,password: string): Observable<user> {
    return this.http
               .get(`api/login?username=${username}&password=${password}`)
               .map((r: Response) => r.json() as user);
  }
 /* register(username: string,password: string): Observable<user> {
    return this.http
               .post(`api/register`)
               .map((r: Response) => r.json() as user);
  }*/
}
