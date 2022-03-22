import { Injectable } from '@angular/core';
import { CurrentComment, OmitReplies } from '../models/commentmodel';
import { LocalstorageService } from './localstorage.service';
import { default as data } from '/src/data.json';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  allComments = this.localstorageService.get() || data.comments;

  currentUser = data.currentUser;

  constructor(private localstorageService: LocalstorageService) {}

  addComment(input: string): void {
    const d1 = new Date();
    const result = d1.getTime();
    const newComment = {
      id: result,
      content: input,
      createdAt: 'now',
      replies: [],
      user: {
        image: {
          png: data.currentUser.image.png,
          webp: data.currentUser.image.webp,
        },
        username: data.currentUser.username,
      },
      score: 0,
    };
    this.allComments.push(newComment);
    this.localstorageService.set(this.allComments);
  }

  deleteComment(id: number): void {
    const commentToDelete = this.allComments.find(
      (comment: OmitReplies) => comment.id === id
    );

    if (commentToDelete) {
      this.allComments.splice(this.allComments.indexOf(commentToDelete), 1);
    }

    this.allComments.forEach((comment: CurrentComment) => {
      const filteredReplays = comment.replies.filter(
        (replay: OmitReplies) => replay.id !== id
      );
      if (comment.replies.length > filteredReplays.length) {
        comment.replies = filteredReplays;
      }
    });
    const newCommentsArray: CurrentComment[] = [];

    this.allComments.forEach((el: CurrentComment) => {
      if (el.id !== id) {
        this.allComments.slice(id, 1);
        newCommentsArray.push(el);
      }
    });

    this.localstorageService.set(newCommentsArray);
  }
}
