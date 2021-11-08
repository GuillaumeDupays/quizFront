import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Question } from '../models/question';

const quizList = [
  {
    quizId: 1,
    name: 'Batman',
    page: 'batman',
    difficulte: 'Moyen',
    class: 'quiz-btn-theme batman-btn',
  },
  {
    quizId: 2,
    name: 'David Bowie',
    page: 'bowie',
    difficulte: 'Facile',
    class: 'quiz-btn-theme bowie-btn',
  },
  {
    quizId: 3,
    name: 'Terminator',
    page: 'terminator',
    difficulte: 'Machine',
    class: 'quiz-btn-theme terminator-btn',
  },
  {
    quizId: 4,
    name: 'Rocky',
    page: 'rocky',
    difficulte: 'Très facile pour V',
    class: 'quiz-btn-theme rocky-btn',
  },
  {
    quizId: 5,
    name: 'Robert Crumb',
    page: 'crumb',
    difficulte: 'Difficile',
    class: 'quiz-btn-theme crumb-btn',
  },
];
const questionsByTheme = [
  {
    idQuiz: 1,
    idQuestion: 11,
    numQuestion: 1,
    contentQuestion: 'Quel est le véritable nom de Batman ?',
    responses: [
      {
        a: 'Bruce tout puissant',
        b: 'Bruce Wayne',
        c: 'Bruce Pwal',
        goodRes: 'b',
      },
    ],
  },
  {
    idQuiz: 1,
    idQuestion: 12,
    numQuestion: 2,
    contentQuestion: 'Quels sont les superpouvoirs de Batman ?',
    responses: [
      {
        a: 'aucun',
        b: 'sa fortune',
        c: 'sa voiture',
        goodRes: 'a',
      },
    ],
  },
  {
    idQuiz: 1,
    idQuestion: 13,
    numQuestion: 3,
    contentQuestion: 'Quelle est la fortune de Batman ?',
    responses: [
      {
        a: '10 millions de dollars',
        b: '100 millions de dollars',
        c: '1 euro symbolique',
        goodRes: 'b',
      },
    ],
  },
  {
    idQuiz: 2,
    idQuestion: 21,
    numQuestion: 1,
    contentQuestion: 'Quand Bowie est-il né ?',
    responses: [
      {
        a: '10 millions de dollars',
        b: '100 millions de dollars',
        c: '1 euro symbolique',
        goodRes: 'b',
      },
    ],
  },
  {
    idQuiz: 2,
    idQuestion: 22,
    numQuestion: 2,
    contentQuestion: 'Où Bowie est-il né ?',
    responses: [
      {
        a: '10 millions de dollars',
        b: '100 millions de dollars',
        c: '1 euro symbolique',
        goodRes: 'b',
      },
    ],
  },
];
@Injectable({
  providedIn: 'root',
})
export class QuizInformations {
  constructor(private http: HttpClient) {}
  private url = 'http://localhost:3000';
  public editDataDetails: any = [];
  public points: number = 0;
  public arrayLength: number = 0;
  // before count points, verify if quiz is finished
  public isQuizEnd: boolean = false;

  getQuizList() {
    return quizList;
  }
  getQuestions() {
    return questionsByTheme;
  }
  countPoints(goodRes: string) {
    if (goodRes) {
      this.points += 1;
      console.log('this.points :>> ', this.points);
    }
  }
  filterDataByTheme(currThemeId: string) {
    const questions = this.getQuestions();
    questions.filter((e: any) => e.idQuiz === currThemeId);
    console.log('currThemeId :>> ', currThemeId.length);
    this.arrayLength = currThemeId.length;
    // if (this.isQuizEnd) {
    //   console.log('this is the END :>> ');
    // }
  }
  createQuestion(question: Question) {
    return this.http.post<Question>(`${this.url}/api/questions`, question);
  }
}
