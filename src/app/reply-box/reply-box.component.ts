import { Component, OnInit, Input } from '@angular/core';
import { CurrentComment } from '../models/commentmodel';
import { CommentService } from '../shared/comment.service';
import { LocalstorageService } from '../shared/localstorage.service';

@Component({
  selector: 'app-reply-box',
  templateUrl: './reply-box.component.html',
  styleUrls: ['./reply-box.component.scss'],
})
export class ReplyBoxComponent implements OnInit {
  textAreaInput = '';
  @Input() currentComment!: CurrentComment;

  currentUser = this.commentService.currentUser;
  commentsArray = this.commentService.allComments;
  isReplyActive = true;

  constructor(
    private commentService: CommentService,
    private localstorageService: LocalstorageService
  ) {}

  ngOnInit(): void {}

  addReply(input: string, id: number) {
    const d1 = new Date();
    this.isReplyActive = !this.isReplyActive;
    const result = d1.getTime();
    this.currentComment.replies.push({
      content: input,
      id: result,
      createdAt: 'now',
      user: {
        image: {
          png: this.commentService.currentUser.image.png,
          webp: this.commentService.currentUser.image.webp,
        },
        username: this.currentUser.username,
      },
      score: 0,
    });

    this.localstorageService.set(this.commentsArray);
  }
}
