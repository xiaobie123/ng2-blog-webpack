import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

import { Article } from '../Entityclass/article';
@Injectable()
export class ArticleSearchService {

  constructor(private http: Http) {}

  search(term: string): Observable<Article[]> {
    return this.http
               .get(`api/Articlelistserch/?title=${term}`)
               .map((r: Response) => r.json() as Article[]);
  }
  getPopularArticles(term: number):Observable<Article[]>{
  	return this.http
               .get(`api/popularArticle`)
               .map((r: Response) => r.json() as Article[]);
  }
  getRecommendarticle():Observable<Article[]>{
  	return this.http
               .get(`api/Recommendarticle`)
               .map((r: Response) => r.json() as Article[]);
  }
}
