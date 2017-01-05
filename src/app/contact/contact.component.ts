import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  template: `
    <commom-banner></commom-banner>
    <div class="technology">
		<div class="container">
			<contact-left></contact-left>
			<home-right></home-right>
		</div>
	</div>
  `,
  styleUrls: []
})
export class ContactComponent { }
