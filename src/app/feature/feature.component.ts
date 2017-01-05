import { Component } from '@angular/core';

@Component({
  selector: 'app-feature',
  template: `
    <commom-banner></commom-banner>
    <div class="technology">
			<div class="container">
				<feature-left></feature-left>
				<home-right></home-right>
			</div>
		</div>
  `,
  styleUrls: []
})
export class FeatureComponent { }
