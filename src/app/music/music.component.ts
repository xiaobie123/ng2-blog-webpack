import { Component } from '@angular/core';

@Component({
  selector: 'app-music',
  template: `
    <commom-banner></commom-banner>
    <div class="technology">
		<div class="container">
			<music-left></music-left>
			<home-right></home-right>
		</div>
	</div>
  `,
  styleUrls: []
})
export class MusicComponent { }
