export interface Question {
  theme?: String;
  idQuiz: Number;
  idQuestion: Number;
  numQuestion: Number;
  contentQuestion: String;
  responses: [
    {
      a: String;
      b: String;
      c: String;
      goodRes: String;
    }
  ];
}
