import { Component, Input, OnInit } from '@angular/core';
import { CommentService } from 'src/app/shared/comment.service';
import { Comment } from '../../interfaces/interface';

@Component({
  selector: 'app-comment-card',
  templateUrl: './comment-card.component.html',
  styleUrls: ['./comment-card.component.scss'],
})
export class CommentCardComponent implements OnInit {
  constructor(private commentService: CommentService) {}
  @Input() currentComment!: Comment;
  ngOnInit(): void {}
  score = '';
  commentsArray = this.commentService.allComments;
  currentUser = this.commentService.currentUser.username;
  deleteComment = this.commentService.deleteComment;
  replyBtn = this.commentService.replyBtn;
}
