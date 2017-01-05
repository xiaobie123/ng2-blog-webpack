import { Component } from '@angular/core';

@Component({
  selector: 'home-right',
  template: `
	<div class="col-md-3 technology-right">
		<div class="blo-top1">
			<div class="tech-btm">
				<Article-serch></Article-serch>
				<Popular-Posts></Popular-Posts>
				<div class="insta wow fadeInDown" data-wow-duration=".8s" data-wow-delay=".2s">
					<h4>Instagram</h4>
					<ul>
						<li>
							<a href="singlepage.html"><img src="../../../public/images/t1.jpg" class="img-responsive" alt=""></a>
						</li>
						<li>
							<a href="singlepage.html"><img src="../../../public/images/m1.jpg" class="img-responsive" alt=""></a>
						</li>
						<li>
							<a href="singlepage.html"><img src="../../../public/images/f1.jpg" class="img-responsive" alt=""></a>
						</li>
						<li>
							<a href="singlepage.html"><img src="../../../public/images/m2.jpg" class="img-responsive" alt=""></a>
						</li>
						<li>
							<a href="singlepage.html"><img src="../../../public/images/f2.jpg" class="img-responsive" alt=""></a>
						</li>
						<li>
							<a href="singlepage.html"><img src="../../../public/images/t2.jpg" class="img-responsive" alt=""></a>
						</li>
						<li>
							<a href="singlepage.html"><img src="../../../public/images/f3.jpg" class="img-responsive" alt=""></a>
						</li>
						<li>
							<a href="singlepage.html"><img src="../../../public/images/t3.jpg" class="img-responsive" alt=""></a>
						</li>
						<li>
							<a href="singlepage.html"><img src="../../../public/images/m3.jpg" class="img-responsive" alt=""></a>
						</li>
					</ul>
				</div>
				<p>Lorem ipsum ex vix illud nonummy, novum tation et his. At vix scripta patrioque scribentur, at pro</p>
			</div>
		</div>
	</div>
	<div class="clearfix"></div>
  `,
  styleUrls: []
})
export class HomeRightConComponent { }