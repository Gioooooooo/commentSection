import { Component, OnInit } from '@angular/core';
import { CommentService } from '../shared/comment.service';

@Component({
  selector: 'app-comment-container',
  templateUrl: './comment-container.component.html',
  styleUrls: ['./comment-container.component.scss'],
})
export class CommentContainerComponent implements OnInit {
  commentsArray = this.commentService.allComments;
  currentUser = this.commentService.currentUser.username;

  constructor(private commentService: CommentService) {}

  ngOnInit(): void {}
}
