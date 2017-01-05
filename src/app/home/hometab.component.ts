import {
	Component
} from '@angular/core';

@Component({
	selector: 'home-tab',
	template: `
	<div class="container">
    <tabset>
	    <tab heading="时尚">
			<div class="col-md-4 col-sm-5 tab-image">
				<img src="../../../public/images/f2.jpg" class="img-responsive" alt="Wanderer">
			</div>
			<div class="col-md-4 col-sm-5 tab-image">
				<img src="../../../public/images/f2.jpg" class="img-responsive" alt="Wanderer">
			</div>
			<div class="col-md-4 col-sm-5 tab-image">
				<img src="../../../public/images/f3.jpg" class="img-responsive" alt="Wanderer">
			</div>
			<div class="clearfix"></div>
		</tab>
	    <tab heading="旅行">
			<div class="col-md-4 col-sm-5 tab-image">
				<img src="../../../public/images/t1.jpg" class="img-responsive" alt="Wanderer">
			</div>
			<div class="col-md-4 col-sm-5 tab-image">
				<img src="../../../public/images/t2.jpg" class="img-responsive" alt="Wanderer">
			</div>
			<div class="col-md-4 col-sm-5 tab-image">
				<img src="../../../public/images/t3.jpg" class="img-responsive" alt="Wanderer">
			</div>
			<div class="clearfix"></div>
	    </tab>
	    <tab heading="音乐">
			<div class="col-md-4 col-sm-5 tab-image">
				<img src="../../../public/images/m2.jpg" class="img-responsive" alt="Wanderer">
			</div>
			<div class="col-md-4 col-sm-5 tab-image">
				<img src="../../../public/images/m1.jpg" class="img-responsive" alt="Wanderer">
			</div>
			<div class="col-md-4 col-sm-5 tab-image">
				<img src="../../../public/images/m3.jpg" class="img-responsive" alt="Wanderer">
			</div>
			<div class="clearfix"></div>
	    </tab>
  	</tabset>
  	</div>
  `,
	styleUrls: []
})
export class HomeTabComponent {}