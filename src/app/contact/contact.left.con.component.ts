import { Component } from '@angular/core';

@Component({
  selector: 'contact-left',
  template: `
  <div class="col-md-9 technology-left">
		<div class="contact-section">
			<h2 class="w3">像我们发信息</h2>
			<div class="contact-grids">
				<div class="col-md-8 contact-grid">
					<p>您的一切意见都是我们进步的动力，欢迎提问</p>
					<form>
						<input type="text" name="Name" placeholder="请输入你的名字" >
						<input type="email" name="Email" placeholder="请输入你的邮箱">
						<input type="text" name="Phone" placeholder="请输入你的电话">
						<textarea type="text" name="textarea" placeholder="请输入你的问题"></textarea>
						<input type="submit" value="发送">
					</form>
				</div>
				<div class="col-md-4 contact-grid1">
					<h4>地址</h4>
					<div class="contact-top">
						<div class="clearfix"></div>
					</div>
					<ul>
						<li><i class="glyphicon glyphicon-earphone" aria-hidden="true"></i> 座机 : 0041-456-3692</li>
						<li><i class="glyphicon glyphicon-phone" aria-hidden="true"></i> 手机 : 0200-123-4567</li>
						<li><i class="glyphicon glyphicon-envelope" aria-hidden="true"></i>
							<a href="#"></a>
							<a href="mailto:info@example.com">info@example.com</a>
						</li>
						<li><i class="glyphicon glyphicon-print" aria-hidden="true"></i> 传真 : 0091-789-456100</li>
					</ul>
				</div>
				<div class="clearfix"></div>
			</div>
			<div class="google-map">
				<iframe src="http://kg.qq.com/node/personal?uid=639d9e86232a35" allowfullscreen></iframe>
			</div>
		</div>
	</div>
  `,
  styleUrls: []
})
export class ContactLeftConComponent {
	
}
