import { Component,OnInit,ViewChild  } from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap';
import { userInformService } from './userinform.service';
import { user } from '../Entityclass/user';
@Component({
  selector: 'user-login',
  template: `
  <div class="nav navbar-nav" style="float: right;">
		<ul class="nav navbar-nav" *ngIf="!USERNAME">
			<li class="">
				<a href="javascript:void(0);" (click)="showChildModal()">登录</a>
			</li>
			<li>
				<a href="javascript:void(0);" (click)="register()">注册</a>
			</li>
		</ul>
		<ul class="nav navbar-nav" *ngIf="USERNAME">
			<li dropdown (onToggle)="toggled($event)">
		    <a href id="simple-dropdown" dropdownToggle>
		      {{USERNAME}}
		    </a>
		    <ul class="dropdown-menu" dropdownMenu aria-labelledby="simple-dropdown">
		      <li>
		        <a class="dropdown-item" href="javascript:void(0);" (click)="logout()">注销</a>
		      </li>
		    </ul>
		  </li>
		</ul>
	</div>
	<div class="modal fade" bsModal #childModal="bs-modal" [config]="{backdrop: 'static'}"
     tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-sm">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" aria-label="Close" (click)="hideChildModal()">
          <span aria-hidden="true">&times;</span>
        </button>
        <h4 class="modal-title">登录</h4>
      </div>
      <div class="modal-body">
      <div class="alert alert-success" *ngIf="info&&info==3">登录成功</div>
      <div class="alert alert-warning" *ngIf="info&&info!=3">用户名或密码错误</div>
        <form role="form" #heroForm="ngForm">
			  <div class="form-group">
			    <label>用户名</label>
			    <input name="username" type="text" class="form-control" placeholder="请输入用户名"
			    required minlength="2" maxlength="20" [(ngModel)]="user.username" #username="ngModel">
			  </div>
			  <div *ngIf="username.errors && (username.dirty || username.touched)" class="alert alert-danger">
				    <div [hidden]="!username.errors.required">
				      用户名为空
				    </div>
				    <div [hidden]="!username.errors.minlength">
				      不能少于2个字符
				    </div>
				    <div [hidden]="!username.errors.maxlength">
				      不能大于20个字符
				    </div>
				</div>
			  <div class="form-group">
			    <label for="exampleInputPassword1">密码</label>
			    <input name="pass" type="password" class="form-control" id="exampleInputPassword1" placeholder="请输入密码"
			    required minlength="4" maxlength="24" [(ngModel)]="user.password" #password="ngModel">
			  </div>
			  <div *ngIf="password.errors && (password.dirty || password.touched)" class="alert alert-danger">
				    <div [hidden]="!password.errors.required">
				      密码为空
				    </div>
				    <div [hidden]="!password.errors.minlength">
				      不能少于4个字符
				    </div>
				    <div [hidden]="!password.errors.maxlength">
				      不能大于20个字符
				    </div>
				</div>
			  <div class="checkbox">
			    <label>
			      <input type="checkbox">记住密码
			    </label>
			  </div>
			</form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" (click)="hideChildModal()">取消</button>
        <button type="button" class="btn btn-primary" (click)="login()" [disabled]="!heroForm.form.valid">确定</button>
      </div>
    </div>
  </div>
</div>
  `,
  providers: [userInformService],
  styleUrls: []
})
export class LoginComponent implements OnInit {
	@ViewChild('childModal')
	public childModal:ModalDirective;
	public user:any={username:"小明",password:"123456"};
	public info:number;
	public USERNAME:string;
	constructor(
    private userinform: userInformService) {}
	
	ngOnInit(): void {}
	login(){
		console.log(this.user);
		this._login();
	}
	logout(){
		this.USERNAME=null;
	}
	getinfo(info:any){
		console.log(info);
		if(info.info==3){
			this.USERNAME=this.user.username;
			this.info=0;
			this.user.username="";
			this.user.password="";
			this.hideChildModal();
		}else{
			this.info=info.info;
		}
	}
	_login(){
		this.userinform.login(this.user.username,this.user.password)
                     .subscribe(
                       (info:any) => this.getinfo(info));
	}
	_register(){
		this.userinform.register(this.user.username,this.user.password)
                     .subscribe(
                       (info:any) => this.info = info);
	}
	public toggled(open:boolean):void {//下拉
    console.log('Dropdown is now: ', open);
  }
	 public showChildModal():void {//模态
    this.childModal.show();
  }
 
  public hideChildModal():void {
    this.childModal.hide();
  }

}
