import { Component } from '@angular/core';

@Component({
  selector: 'home-banner',
  template: `
    <div class="banner">
		<div class="container">	
			<h2>非主流的想法,也许更能引起你的兴趣</h2>
			<p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
			<a [routerLink]="['/SinglePage',1]">阅读更多</a>
		</div>
	</div>
  `,
  styleUrls: []
})
export class HomeBannerComponent { }
