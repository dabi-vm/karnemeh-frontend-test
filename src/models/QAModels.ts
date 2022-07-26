interface IGeneralItem {
  id?: string;
  title: string;
  desc: string;
  date: Date;
}
export interface IQAList extends IGeneralItem {
  replies: IReply[];
}

export interface IReply extends IGeneralItem {
  like: number;
  dislike: number;
}
