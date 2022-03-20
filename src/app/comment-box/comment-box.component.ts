import { Component, OnInit } from '@angular/core';
import { CommentService } from '../shared/comment.service';

@Component({
  selector: 'app-comment-box',
  templateUrl: './comment-box.component.html',
  styleUrls: ['./comment-box.component.scss'],
})
export class CommentBoxComponent implements OnInit {
  constructor(private commentService: CommentService) {}

  ngOnInit(): void {}
  textAreaInput = '';
  currentUser = this.commentService.currentUser;
  commentsArray = this.commentService.allComments;
  addComment = this.commentService.addComment;
}
