import { Component,OnInit } from '@angular/core';
import { Router }    from '@angular/router';
import { ArticleSearchService } from './Article-search.service';
import { Article } from '../Entityclass/article';
@Component({
  selector: 'Popular-Posts',
  template: `
    <h4>热门文章</h4>
	<div class="blog-grids wow fadeInDown clearfix" *ngFor="let Article of Articles"   (click)="gotoDetail(Article)">
		<div class="blog-grid-left">
			<a><img src="{{Article.img}}" class="img-responsive" alt=""></a>
		</div>
		<div class="blog-grid-right">
			<h5><a>{{Article.title}}</a> </h5>
		</div>
	</div>
  `,
  providers: [ArticleSearchService],
  styleUrls: []
})
export class PopularPosts implements OnInit {
	Articles: Article[];
	constructor(
    private articleSearchService: ArticleSearchService,
    private router: Router) {}
	
	ngOnInit() { this.getHeroes(); }
	getHeroes() {
    this.articleSearchService.getPopularArticles(1)
                     .subscribe(
                       (articles:any) => this.Articles = articles);
  }
	gotoDetail(hero: Article): void {
    let link = ['/SinglePage', hero.id];
    this.router.navigate(link);
  }
}
