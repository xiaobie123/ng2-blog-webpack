import { Component,Input,OnInit,OnChanges,SimpleChanges,ViewChild } from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap';
import { SinglePage }        from './singlepage';
import { SinglePageService } from './singlepage.service';
import 'rxjs/add/operator/switchMap';
@Component({
  selector: 'singlepage-left',
  providers: [ SinglePageService ],
  templateUrl: 'singlepage.left.con.component.html',
  styleUrls: []
})
export class SinglePageLeftConComponent implements OnInit,OnChanges{
	@ViewChild('childModal')
	public childModal:ModalDirective;
	@Input()
	pageid: any;
	singlePage:SinglePage;
	public curcomment:any;
	constructor(
    private singlePageService: SinglePageService
  ) {}
	ngOnInit(): void {
		console.log("开始");
		//this.abc();
		
	}
	ngOnChanges(changes: SimpleChanges) {
		console.log("开始ngOnChanges");
    for (let propName in changes) {
      if(propName=="pageid"){
      	this.abc();
      }
    }
  }
	abc(){
		console.log(this.pageid);
		this.singlePageService.getSinglePage(+this.pageid)
			.then((singlePage:SinglePage)=>console.log(this.singlePage=singlePage));
	}
	public comment(com:string):void{
		this.curcomment.comment.push({
			headimg:"/public/images/sin1.jpg",
			name:"小华",
			text:com,
			date:"2016年12月27日",
			com:"小明"
		});
		this.childModal.hide();
	}
	public Maincomment(com:string):void{
		if(com==null||com==undefined)return;
		console.log(com);
		this.singlePage.comment.push({
		headimg:"/public/images/sin1.jpg",
		name:"小明",
		text:com,
		date:"2016年12月27日",
		comment:[]
	});
	com="";
	}
	public showChildModal(coment:any):void {//模态
		this.curcomment=coment;
    this.childModal.show();
  }
 
  public hideChildModal():void {
    this.childModal.hide();
  }
	
}