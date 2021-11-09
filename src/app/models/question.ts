export interface Question {
  autor?: String;
  theme?: String;
  idQuiz: String;
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
