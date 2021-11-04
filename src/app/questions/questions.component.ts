import { Component, OnInit } from '@angular/core';
import { QuizInformations } from '../services/quizInformations';
import { Directive, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.sass'],
})
export class QuestionsComponent implements OnInit {
  selectedMessage: any;
  datasByPage: any = {};
  // change question and response dynamically
  questionCounter: any = 0;
  // question by theme
  currentQuestion: any = {};
  // answer by theme and question
  currentAnswer: any = [];
  // determine a value for each response
  resA: string = '';
  resB: string = '';
  resC: string = '';
  points: number = 0;
  gameMessage: string = '';
  @Input() response: string = '';
  isQuizEnd: boolean = this.quizService.isQuizEnd;
  currArrayLength: number = 0;
  isQuizFinished: boolean = false;

  constructor(private quizService: QuizInformations) {}
  ngOnInit() {
    this.getDatasQuizByPage();
    console.log(
      'this.datasByPage.questionsById :>> ',
      this.datasByPage.questionsById
    );
    this.quizService.filterDataByTheme(this.datasByPage.questionsById);
    this.currArrayLength = this.quizService.arrayLength;
    console.log('this.currArrayLength :>> ', this.currArrayLength);
    this.initResponses();
  }
  ngAfterViewInit() {}
  get isEndOfQuiz() {
    return this.quizService.isQuizEnd;
  }
  set isEndOfQuiz(newVal) {
    this.isEndOfQuiz = newVal;
  }
  initResponses() {
    const currAnwer = this.datasByPage.questionsById[this.questionCounter];
    console.log('currAnswer :>> ', currAnwer);
    const currResponses = currAnwer.responses[0];
    console.log('currResponses :>> ', currResponses);
    const currAnswer = Object.keys(currResponses);
    currAnswer.filter((response: string) => {
      response === 'a' ? (this.resA = response) : -1,
        response === 'b' ? (this.resB = response) : -1,
        response === 'c' ? (this.resC = response) : -1;
    });
  }
  findTheGoodResponse(response: string) {
    console.log('this.currentAnswer :>> ', this.currentAnswer);
    const goodRes = this.currentAnswer.goodRes;
    response === goodRes
      ? response === this.resA
      : response === this.resB || this.resC;
    if (response === goodRes) {
      console.log('good :>> ', response);
      this.quizService.countPoints(goodRes);
      this.points = this.quizService.points;
    } else {
      console.log('Bad :>> ', response);
    }
  }
  selectResponse(response: string) {
    this.findTheGoodResponse(response);
  }
  nextQuestion() {
    this.questionCounter += 1;
    this.currentQuestion =
      this.datasByPage.questionsById[this.questionCounter] || {};
    this.currentAnswer =
      this.datasByPage.questionsById[this.questionCounter]?.responses[0] || [];
    if (this.currentAnswer.length === 0) {
      console.log('STOP :>> ');
      this.gameMessage = 'Quiz is finished';
      this.isQuizFinished = true;
    }
  }
  getDatasQuizByPage() {
    // get from quiz component all data you need to questions, answers...
    // second affect to current var, datas correponding like currentQuestion, currentAnswer etc...
    this.datasByPage = history.state;
    this.currentQuestion = this.datasByPage.questionsById[this.questionCounter];
    console.log('this.currentQuestion :>> ', this.currentQuestion);
    const currAnwer =
      this.datasByPage.questionsById[this.questionCounter] || [];
    this.currentAnswer = currAnwer?.responses[0] || [];
    console.log('this.currentAnswer :>> ', this.currentAnswer);
  }
}
