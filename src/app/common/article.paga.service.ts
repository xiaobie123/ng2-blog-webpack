import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

import { Article } from '../Entityclass/article';
@Injectable()
export class ArticlePageService {

  constructor(private http: Http) {}

  getPageFind(term: number,PerPage: number): Observable<Article[]> {
    return this.http
               .get(`api/ArticlePageserch/?pagenum=${term}&PerPage=${PerPage}`)
               .map((r: Response) => r.json() as Article[]);
  }
  getItemNum(): Observable<Article[]> {//得到总数
    return this.http
               .get(`api/ArticlePageserch/itemNum`)
               .map((r: Response) => r.json() as Article[]);
  }
}
