import { Component, Input, OnInit } from '@angular/core';
import { CurrentComment } from 'src/app/models/commentmodel';
import { CommentService } from 'src/app/shared/comment.service';

@Component({
  selector: 'app-comment-card',
  templateUrl: './comment-card.component.html',
  styleUrls: ['./comment-card.component.scss'],
})
export class CommentCardComponent implements OnInit {
  @Input() currentComment: CurrentComment | undefined;
  // @Input() currentComment!: CurrentComment;

  isReplyActive = false;
  score = '';
  commentsArray = this.commentService.allComments;
  currentUser = this.commentService.currentUser.username;

  constructor(private commentService: CommentService) {}

  ngOnInit(): void {}

  deleteComment(id: number) {
    this.commentService.deleteComment(id);
  }

  replyBtn() {
    this.isReplyActive = !this.isReplyActive;
  }
}
