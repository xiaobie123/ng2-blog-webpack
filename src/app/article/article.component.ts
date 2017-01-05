import { Component } from '@angular/core';

@Component({
  selector: 'app-article',
  template: `
    <commom-banner></commom-banner>
    <div class="technology">
		<div class="container">
			<article-left></article-left>
			<home-right></home-right>
		</div>
	</div>
  `,
  styleUrls: []
})
export class ArticleComponent { }
