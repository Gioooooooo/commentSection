import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommentContainerComponent } from './comment-container/comment-container.component';
import { CommentCardComponent } from './comment-container/comment-card/comment-card.component';
import { CommentBoxComponent } from './comment-box/comment-box.component';
import { ReplyComponent } from './comment-container/comment-card/reply/reply.component';

@NgModule({
  declarations: [AppComponent, CommentContainerComponent, CommentCardComponent, CommentBoxComponent, ReplyComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
