export interface Comment {
  content: string;
  createdAt: string;
  id: number;
  replies: [];
  user: {
    image: {
      png: string;
      webp: string;
    };
    username: string;
  };
  score: number;
}
