export interface CurrentComment {
  content: string;
  createdAt: string | number;
  replies: OmitReplies[];
  id: number;
  score: number;
  user: {
    image: {
      png: string;
      webp: string;
    };
    username: string;
  };
}

export type OmitReplies = Omit<CurrentComment, 'replies'>;
