import { Component,ElementRef,OnInit } from '@angular/core';
@Component({
  selector: 'feature-left',
  template: `
	<div class="col-md-9 technology-left">
			<div class="gallery" id="gallery">
		
			<h2 class="w3">图片</h2>
			<p>Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable alteration in some form, by injected humour, or randomised words which don't look even slightly believable, Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable alteration in some form, by injected humour, or randomised words which don't look even slightly believable </p>			
			<div class="gallery-grids">
				<div class="gallery-grid">
					<a href="../../../public/images/g1.jpg" class="wow fadeInUp animated animated" data-wow-delay=".5s" style="visibility: visible; animation-delay: 0.5s; animation-name: fadeInUp;">
						<img src="../../../public/images/g1.jpg" alt=" " class="img-responsive zoom-img">
					</a>
					<a href="../../../public/images/g5.jpg" class="wow fadeInUp animated animated" data-wow-delay=".5s" style="visibility: visible; animation-delay: 0.5s; animation-name: fadeInUp;">
						<img src="../../../public/images/g5.jpg" alt=" " class="img-responsive zoom-img">
					</a>
				</div>
				<div class="gallery-grid">
					<a href="../../../public/images/g6.jpg" class="wow fadeInUp animated animated" data-wow-delay=".5s" style="visibility: visible; animation-delay: 0.5s; animation-name: fadeInUp;">
						<img src="../../../public/images/g6.jpg" alt=" " class="img-responsive zoom-img">
					</a>
					<a href="../../../public/images/g2.jpg" class="wow fadeInUp animated animated" data-wow-delay=".5s" style="visibility: visible; animation-delay: 0.5s; animation-name: fadeInUp;">
						<img src="../../../public/images/g2.jpg" alt=" " class="img-responsive zoom-img">
					</a>
				</div>
				<div class="gallery-grid">
					<a href="../../../public/images/g3.jpg" class="wow fadeInUp animated animated" data-wow-delay=".5s" style="visibility: visible; animation-delay: 0.5s; animation-name: fadeInUp;">
						<img src="../../../public/images/g3.jpg" alt=" " class="img-responsive zoom-img">
					</a>
					<a href="../../../public/images/g7.jpg" class="wow fadeInUp animated animated" data-wow-delay=".5s" style="visibility: visible; animation-delay: 0.5s; animation-name: fadeInUp;">
						<img src="../../../public/images/g7.jpg" alt=" " class="img-responsive zoom-img">
					</a>
				</div>
				<div class="gallery-grid" data-wow-delay=".5s">
					<a href="../../../public/images/g8.jpg">
						<img src="../../../public/images/g8.jpg" alt=" " class="img-responsive zoom-img">
					</a>
					<a href="../../../public/images/g4.jpg" class="wow fadeInUp animated animated" data-wow-delay=".5s" style="visibility: visible; animation-delay: 0.5s; animation-name: fadeInUp;">
						<img src="../../../public/images/g4.jpg" alt=" " class="img-responsive zoom-img">
					</a>
				</div>
				<div class="clearfix"> </div>
			</div>
	
	</div>
		</div>
  `,
  styleUrls: []
})
export class FeatureLeftConComponent {
	constructor(private el: ElementRef) { }
	ngOnInit(): void {
		console.log(this.el.nativeElement);
		console.log(jQuery);
		jQuery(this.el.nativeElement).find('.gallery-grid a').Chocolat();
	}
}
