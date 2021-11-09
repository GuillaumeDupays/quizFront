export interface Question {
  autor?: String;
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
