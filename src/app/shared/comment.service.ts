import { Injectable } from '@angular/core';
import { default as data } from '/src/data.json';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  allComments = data.comments;
  currentUser = data.currentUser;
  constructor() {}

  addComment(input: any): any {
    const d1 = new Date();

    const result = d1.getTime();

    data.comments.push({
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
    });
  }

  deleteComment(id: number): void {
    const commentToDelete = data.comments.find(
      (comment: any) => comment.id === id
    );

    if (commentToDelete) {
      data.comments.splice(data.comments.indexOf(commentToDelete), 1);
    }

    data.comments.forEach((comment: any) => {
      //prettier-ignore
      const replyToDelete = comment.replies.filter((replay: any) => replay.id !== id);
      if (comment.replies.length > replyToDelete.length) {
        comment.replies = replyToDelete;
      }
    });
  }

  replyBtn(id: number) {
    console.log(id);
  }
}
