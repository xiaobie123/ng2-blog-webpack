import { Component } from '@angular/core';
import { ArticleSearchService } from '../common/Article-search.service';
import { Article } from '../Entityclass/article';
@Component({
  selector: 'home-left',
  template: `
    <div class="col-md-9 technology-left">
		<div class="tech-no" *ngIf="Articles">
			<!-- technology-top -->
			<div class="tc-ch wow fadeInDown" data-wow-duration=".8s" data-wow-delay=".2s">
				<div class="tch-img">
					<a href="singlepage.html"><img src="{{Articles[0].img}}" class="img-responsive" alt=""></a>
				</div>
				<h3><a href="singlepage.html">{{Articles[0].title}}</a></h3>
				<h6><a href="singlepage.html">{{Articles[0].name}}</a>{{Articles[0].date}}</h6>
				<p>{{Articles[0].abstract}}</p>
				<div class="bht1">
					<a [routerLink]="['/SinglePage',Articles[0].id]">进入阅读</a>
				</div>
				<div class="soci">
					<ul>
						<li class="hvr-rectangle-out">
							<a class="fb" href="#"></a>
						</li>
						<li class="hvr-rectangle-out">
							<a class="twit" href="#"></a>
						</li>
						<li class="hvr-rectangle-out">
							<a class="goog" href="#"></a>
						</li>
						<li class="hvr-rectangle-out">
							<a class="pin" href="#"></a>
						</li>
						<li class="hvr-rectangle-out">
							<a class="drib" href="#"></a>
						</li>
					</ul>
				</div>
				<div class="clearfix"></div>
			</div>
			<div class="clearfix"></div>
			<!-- technology-top -->
			<!-- technology-top -->
			<div class="w3ls">
				<div class="col-md-6 w3ls-left wow fadeInDown" data-wow-duration=".8s" data-wow-delay=".2s">
					<div class="tc-ch">
						<div class="tch-img">
							<a href="singlepage.html">
								<img src="{{Articles[1].img}}" class="img-responsive" alt=""></a>
						</div>
						<h3><a href="singlepage.html">{{Articles[1].title}}</a></h3>
						<h6><a href="singlepage.html">{{Articles[1].name}}</a>{{Articles[1].date}}</h6>
						<p>{{Articles[1].abstract}}</p>
						<div class="bht1">
							<a [routerLink]="['/SinglePage',Articles[1].id]">进入阅读</a>
						</div>
						<div class="soci">
							<ul>
								<li class="hvr-rectangle-out">
									<a class="fb" href="#"></a>
								</li>
								<li class="hvr-rectangle-out">
									<a class="pin" href="#"></a>
								</li>
							</ul>
						</div>
						<div class="clearfix"></div>
					</div>
				</div>
				<div class="col-md-6 w3ls-left wow fadeInDown" data-wow-duration=".8s" data-wow-delay=".2s">
					<div class="tc-ch">
						<div class="tch-img">
							<a href="singlepage.html"><img src="{{Articles[2].img}}" class="img-responsive" alt=""></a>
						</div>
						<h3><a href="singlepage.html">{{Articles[2].title}}</a></h3>
						<h6><a href="singlepage.html">{{Articles[2].name}}</a>{{Articles[2].date}}</h6>
						<p>{{Articles[2].abstract}}</p>
						<div class="bht1">
							<a [routerLink]="['/SinglePage',Articles[2].id]">进入阅读</a>
						</div>
						<div class="soci">
							<ul>
								<li class="hvr-rectangle-out">
									<a class="twit" href="#"></a>
								</li>
								<li class="hvr-rectangle-out">
									<a class="drib" href="#"></a>
								</li>
							</ul>
						</div>
						<div class="clearfix"></div>
					</div>
				</div>
				<div class="clearfix"></div>
			</div>
			<!-- technology-top -->
			<div class="wthree">
				<div class="col-md-6 wthree-left wow fadeInDown" data-wow-duration=".8s" data-wow-delay=".2s">
					<div class="tch-img">
						<a href="singlepage.html"><img src="{{Articles[3].img}}" class="img-responsive" alt=""></a>
					</div>
				</div>
				<div class="col-md-6 wthree-right wow fadeInDown" data-wow-duration=".8s" data-wow-delay=".2s">
					<h3><a href="singlepage.html">{{Articles[3].title}}</a></h3>
					<h6><a href="singlepage.html">{{Articles[3].name}}</a>{{Articles[3].date}}</h6>
					<p>{{Articles[3].abstract}}</p>
					<div class="bht1">
						<a [routerLink]="['/SinglePage',Articles[3].id]">进入阅读</a>
					</div>
					<div class="soci">
						<ul>
							<li class="hvr-rectangle-out">
								<a class="twit" href="#"></a>
							</li>
							<li class="hvr-rectangle-out">
								<a class="pin" href="#"></a>
							</li>
						</ul>
					</div>
					<div class="clearfix"></div>
				</div>
				<div class="clearfix"></div>
			</div>
			<div class="wthree">
				<div class="col-md-6 wthree-left wow fadeInDown" data-wow-duration=".8s" data-wow-delay=".2s">
					<div class="tch-img">
						<a href="singlepage.html"><img src="{{Articles[4].img}}" class="img-responsive" alt=""></a>
					</div>
				</div>
				<div class="col-md-6 wthree-right wow fadeInDown" data-wow-duration=".8s" data-wow-delay=".2s">
					<h3><a href="singlepage.html">{{Articles[4].title}}</a></h3>
					<h6><a href="singlepage.html">{{Articles[4].name}}</a>{{Articles[4].date}}</h6>
					<p>{{Articles[4].abstract}}</p>
					<div class="bht1">
						<a [routerLink]="['/SinglePage',Articles[4].id]">进入阅读</a>
					</div>
					<div class="soci">
						<ul>
							<li class="hvr-rectangle-out">
								<a class="goog" href="#"></a>
							</li>
							<li class="hvr-rectangle-out">
								<a class="fb" href="#"></a>
							</li>
						</ul>
					</div>
					<div class="clearfix"></div>
				</div>
				<div class="clearfix"></div>
			</div>
			<div class="wthree">
				<div class="col-md-6 wthree-left wow fadeInDown" data-wow-duration=".8s" data-wow-delay=".2s">
					<div class="tch-img">
						<a href="singlepage.html"><img src="http://kg.qq.com/gtimg/music/photo/mid_album_300/X/m/003vZCjK2L2OXm.jpg" class="img-responsive" alt=""></a>
					</div>
				</div>
				<div class="col-md-6 wthree-right wow fadeInDown" data-wow-duration=".8s" data-wow-delay=".2s">
					<h3><a href="singlepage.html">{{Articles[5].title}}</a></h3>
					<h6><a href="singlepage.html">{{Articles[5].name}}</a>{{Articles[4].date}}</h6>
					<p>{{Articles[5].abstract}}</p>
					<div class="bht1">
						<a [routerLink]="['/SinglePage',Articles[5].id]">进入阅读</a>
					</div>
					<div class="soci">
						<ul>
							<li class="hvr-rectangle-out">
								<a class="drib" href="#"></a>
							</li>
							<li class="hvr-rectangle-out">
								<a class="goog" href="#"></a>
							</li>
						</ul>
					</div>
					<div class="clearfix"></div>
				</div>
				<div class="clearfix"></div>
			</div>
		</div>
	</div>
  `,
  styleUrls: [],
  providers: [ArticleSearchService]
})
export class HomeLeftConComponent {
	Articles: Article[];
	constructor(
    private articleSearchService: ArticleSearchService) {}
	
	ngOnInit() { this.getHeroes(); }
	getHeroes() {
    this.articleSearchService.getRecommendarticle()
                     .subscribe(
                       (articles:any) => this.Articles = articles);
  }
}
