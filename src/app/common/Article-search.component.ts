import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';

import { Article } from '../Entityclass/article';
import { ArticleSearchService } from './Article-search.service';


@Component({
  selector: 'Article-serch',
  template: `
<div class="search-1 wow fadeInDown" data-wow-duration=".8s" data-wow-delay=".2s">
	<input type="search" #searchBox id="search-box" (keyup)="search(searchBox.value)">
	<input value=" " type="submit" (click)="search(searchBox.value)">
	<div class="dropdown-menu show" style="position:static;min-width:0;padding:0;">
	<li *ngFor="let Article of Articles | async"
         (click)="gotoDetail(Article)" class="search-result" >
      <a>{{Article.title}} </a>
    </li>
</div>
</div>

  `,
  providers: [ArticleSearchService]
})
export class ArticleSearchSComponent implements OnInit {
  Articles: Observable<Article[]>;
  private searchTerms = new Subject<string>();

  constructor(
    private articleSearchService: ArticleSearchService,
    private router: Router) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.Articles = this.searchTerms
      .debounceTime(300)        // wait for 300ms pause in events
      .distinctUntilChanged()   // 如果我们的关键词搜索的关键词相同,会被过滤
      .switchMap(term => term   // switch to new observable each time   获取关键词
        // return the http search observable
        ? this.articleSearchService.search(term)
        // or the observable of empty heroes if no search term
        : Observable.of<Article[]>([]))
      .catch(error => {
        // TODO: real error handling
        console.log(error);
        return Observable.of<Article[]>([]);
      });
  }

  gotoDetail(hero: Article): void {
    let link = ['/SinglePage', hero.id];
    this.router.navigate(link);
  }
}