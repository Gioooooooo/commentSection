import { Component, Input, OnInit } from '@angular/core';
import { CurrentComment, OmitReplies } from 'src/app/models/commentmodel';
import { CommentService } from 'src/app/shared/comment.service';

@Component({
  selector: 'app-reply',
  templateUrl: './reply.component.html',
  styleUrls: ['./reply.component.scss'],
})
export class ReplyComponent implements OnInit {
  // @Input() currentReply!: OmitReplies;
  @Input() currentReply: OmitReplies | undefined;

  // @Input() currentComment!: CurrentComment;
  @Input() currentComment: CurrentComment | undefined;
  isReplyActive = false;

  currentUser = this.commentService.currentUser.username;

  constructor(private commentService: CommentService) {}

  ngOnInit(): void {}

  deleteReply(id: number | undefined) {
    if (id) {
      this.commentService.deleteComment(id);
    }
  }

  replyBtn() {
    this.isReplyActive = !this.isReplyActive;
  }
}
