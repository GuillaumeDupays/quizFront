export interface Question {
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
