import { Component, Input, OnInit } from '@angular/core';
import { Comment } from '../../../interfaces/interface';
import { CommentService } from 'src/app/shared/comment.service';

@Component({
  selector: 'app-reply',
  templateUrl: './reply.component.html',
  styleUrls: ['./reply.component.scss'],
})
export class ReplyComponent implements OnInit {
  @Input() currentReply!: any;
  constructor(private commentService: CommentService) {}

  currentUser = this.commentService.currentUser.username;
  deleteReply = this.commentService.deleteComment;
  ngOnInit(): void {}
}
