import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
    <commom-banner></commom-banner>
    <div class="technology">
		<div class="container">
			<about-left></about-left>
			<home-right></home-right>
		</div>
	</div>
  `,
  styleUrls: []
})
export class AboutComponent { }
