export type IQuestionItem = {
  id: string;
  category: string;
  mention: string;
  answer: string;
};

export type IQuestion = {
  [id: string]: IQuestionItem;
};
