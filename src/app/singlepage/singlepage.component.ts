import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common'
import { SinglePage }        from './singlepage';
import { SinglePageService } from './singlepage.service';
import 'rxjs/add/operator/switchMap';
@Component({
  selector: 'singlepage-home',
  template: `
    <commom-banner ></commom-banner>
	<div class="technology">
		<div class="container">
			<singlepage-left [pageid]="id"></singlepage-left>
			<home-right></home-right>
		</div>
	</div>
  `,
  styleUrls: []
})
export class SinglePageComponent implements OnInit{
	singlePage: SinglePage;
	id:any;
	constructor(
    private singlePageService: SinglePageService,
    private route: ActivatedRoute,
    private location: Location
  ) {}
  
  ngOnInit(): void {
  	this.route.params
      .switchMap((params: Params) => params['id'])
      .subscribe((id:any) => this.id=id);
  	
    /*this.route.params
      .switchMap((params: Params) => this.singlePageService.getSinglePage(+params['id']));
      .subscribe(singlePage => console.log(this.singlePage = singlePage));*/
  }
  save(): void {
    this.singlePageService.update(this.singlePage)
      .then(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }
}
