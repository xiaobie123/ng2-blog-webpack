import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <home-banner></home-banner>
    <home-tab></home-tab>
	<div class="technology">
		<div class="container">
			<home-left></home-left>
			<home-right></home-right>
		</div>
	</div>
  `,
  styleUrls: []
})
export class HomeComponent { }
