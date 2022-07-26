export interface IReply {
  id: string;
  title: string;
  desc: string;
  date: Date;
  like: number;
  dislike: number;
}

export interface IQAList {
  id: string;
  title: string;
  desc: string;
  date: Date;
  replies: IReply[];
}
