import { Injectable }    from '@angular/core';
import { Headers, Http,Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { SinglePage } from './singlepage';

@Injectable()
export class SinglePageService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private pageUrl = 'api/page';  // URL to web api

  constructor(private http: Http) { }

  getSinglePages(): Promise<SinglePage[]> {
    return this.http.get(this.pageUrl)
               .toPromise()
               .then(response => response.json().data as SinglePage[])
               .catch(this.handleError);
  }


  getSinglePage(id: number): Promise<SinglePage> {
    const url = `${this.pageUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }
	private extractData(res: Response) {
    let body = res.json();
    return body || { };
  }
  delete(id: number): Promise<void> {
    const url = `${this.pageUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  create(name: string): Promise<SinglePage> {
    return this.http
      .post(this.pageUrl, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handleError);
  }

  update(singlePage: SinglePage): Promise<SinglePage> {
    const url = `${this.pageUrl}/${singlePage.id}`;
    return this.http
      .put(url, JSON.stringify(singlePage), {headers: this.headers})
      .toPromise()
      .then(() => singlePage)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
