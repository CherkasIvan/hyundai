import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticleComponent } from './components/article/article.component';
import { CommentsComponent } from './components/comments/comments.component';

@NgModule({
  declarations: [
    ArticleComponent,
    CommentsComponent
  ],
  exports: [
    ArticleComponent,
    CommentsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ArticleModule { }
