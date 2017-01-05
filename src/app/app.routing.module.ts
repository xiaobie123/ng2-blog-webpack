import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
/*首页*/
import { HomeComponent }   from './home/home.component';
/*关于*/
import { AboutComponent }   from './about/about.component';
/*个性*/
import { FeatureComponent }   from './feature/feature.component';
/*音乐*/
import { MusicComponent }   from './music/music.component';
/*联系我们*/
import { ContactComponent }   from './contact/contact.component';
/*文章列表也*/
import { ArticleComponent }   from './article/article.component';
/*详情页*/
import { SinglePageComponent }   from './singlepage/singlepage.component';
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',  component: HomeComponent},
  { path: 'about',  component: AboutComponent },
  { path: 'feature',  component: FeatureComponent },
  { path: 'article',  component: ArticleComponent },
  { path: 'music',  component: MusicComponent },
  { path: 'contact',  component: ContactComponent },
  { path: 'SinglePage/:id',  component: SinglePageComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}