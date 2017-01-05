import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';
import { FormsModule }   from '@angular/forms';
/*ng-bootstarp*/
import { TabsModule } from 'ng2-bootstrap/tabs';
import { PaginationModule } from 'ng2-bootstrap/pagination';
import { ModalModule } from 'ng2-bootstrap/modal';
import { DropdownModule } from 'ng2-bootstrap/dropdown';
import { AppComponent } from './app.component';
/*通用*/
import { CommonBannerComponent }   from './common/commonbanner.component';
import { PopularPosts }   from './common/popularposts.ts';
import { LoginComponent }   from './common/login.component';
import { ArticleSearchSComponent } from './common/Article-search.component';
import { ArticleSearchService } from './common/Article-search.service';
import { ArticlePageService } from './common/article.paga.service';
import { userInformService } from './common/userinform.service';
/*首页*/
import { HomeComponent }   from './home/home.component';
import { HomeBannerComponent }   from './home/homebanner.component';
import { HomeTabComponent }   from './home/hometab.component';
import { HomeLeftConComponent }   from './home/home.left.con.component';
import { HomeRightConComponent }   from './home/home.right.con.component';
/*关于*/
import { AboutComponent }   from './about/about.component';
import { AboutLeftConComponent }   from './about/about.left.con.component';
/*个性*/
import { FeatureComponent }   from './feature/feature.component';
import { FeatureLeftConComponent }   from './feature/feature.left.con.component';
/*音乐*/
import { MusicComponent }   from './music/music.component'; 
import { MusicLeftConComponent }   from './music/music.left.con.component';
/*文章列表页*/
import { ArticleComponent }   from './article/article.component';
import { ArticleLeftConComponent }   from './article/article.left.con.component';
/*联系我们*/
import { ContactComponent }   from './contact/contact.component';
import { ContactLeftConComponent }   from './contact/contact.left.con.component';
/*详情页*/
import { SinglePageLeftConComponent  }   from './singlepage/singlepage.left.con.component';
import { SinglePageComponent }   from './singlepage/singlepage.component';
import { SinglePageService } from './singlepage/singlepage.service';
/*路由*/
import { AppRoutingModule }     from './app.routing.module';


@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    TabsModule.forRoot(),
    PaginationModule.forRoot(),
    ModalModule.forRoot(),
    DropdownModule.forRoot()
    
  ],
  declarations: [
    AppComponent,
    CommonBannerComponent,
    ArticleSearchSComponent,
    PopularPosts,
    LoginComponent,
    HomeBannerComponent,
    HomeComponent,
    HomeTabComponent,
    HomeLeftConComponent,
    HomeRightConComponent,
    AboutComponent,
    AboutLeftConComponent,
    FeatureComponent,
    FeatureLeftConComponent,
    ArticleComponent,
    ArticleLeftConComponent,
    SinglePageComponent,
    SinglePageLeftConComponent,
    MusicComponent,
    MusicLeftConComponent,
    ContactComponent,
    ContactLeftConComponent
    
  ],
  providers: [ SinglePageService,ArticleSearchService,ArticlePageService,userInformService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
