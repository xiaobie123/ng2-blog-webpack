import { Component,OnInit } from '@angular/core';
import { ArticlePageService } from '../common/article.paga.service';
import { Article } from '../Entityclass/article';
@Component({
  selector: 'article-left',
  template: `
  <div class="col-md-9 technology-left">
	<div class="blog clearfix">
		<h2 class="w3">文章</h2>
		<div class="col-md-6 blog-grid" *ngFor="let Article of articlelist">
			<div class="blog-grid-left1"> 
				<a [routerLink]="['/SinglePage',Article.id]"><img src="{{Article.img}}" alt=" " class="img-responsive"></a>
			</div>
			<div class="blog-grid-right1">
				<a [routerLink]="['/SinglePage',Article.id]">{{Article.title}}</a>
				<h4>28 July 2016</h4>
				<p>{{Article.abstract}}</p>
			</div>
			<div class="clearfix"></div>
			<div class="more m1">
				<a class="btn effect6" [routerLink]="['/SinglePage',Article.id]">查看详情</a>
			</div>
		</div>
		<pagination [firstText]="firstText" [lastText]="lastText" [nextText]="nextText" [previousText]="previousText" [itemsPerPage]="itemsPerPage" [totalItems]="bigTotalItems" [(ngModel)]="bigCurrentPage"
		(pageChanged)="pageChanged($event)" [maxSize]="maxSize" class=""
    [boundaryLinks]="true" [rotate]="false" (numPages)="numPages = $event" ></pagination>
	</div>
	</div>
  `,
   providers: [ArticlePageService],
  styleUrls: []
})
export class ArticleLeftConComponent implements OnInit{
	public firstText:string = "首页";
	public lastText:string = "尾页";
	public nextText:string = "下一页";
	public previousText:string = "上一页";
 	public itemsPerPage:number=4;
  public maxSize:number = 5;
  public bigTotalItems:number;
  public bigCurrentPage:number = 1;
  public articlelist:Article[];
 constructor(private articlePageService: ArticlePageService) {}
    
 /* public setPage(pageNo:number):void {
    this.currentPage = pageNo;
  }*/
 ngOnInit(): void {
 	this.articlePageService.getItemNum()
 					.subscribe((num:any) => this.bigTotalItems = num.num);
 	this.getPage(this.bigCurrentPage,this.itemsPerPage);//获取第一页的数据 默认是1,8
 }
 //获取数据:页码,每页条数
 getPage(num:number,PerPage: number){
 	this.articlePageService.getPageFind(num,PerPage)
 					.subscribe((arlist:Article[]) => this.articlelist = arlist);
 }
  public pageChanged(event:any):void {
  	this.getPage(event.page,event.itemsPerPage);
    console.log('Page changed to: ' + event.page);
    console.log('Number items per page: ' + event.itemsPerPage);
  }
}
