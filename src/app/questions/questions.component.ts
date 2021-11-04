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
  @Input() response: string = '';

  constructor() {}
  ngOnInit() {
    this.getDatasQuizByPage();
    this.currentAnswer = this.datasByPage.questionsById[this.questionCounter];
    this.initResponses();
  }
  ngAfterViewInit() {}
  initResponses() {
    const currAnswer = Object.keys(this.currentAnswer.responses[0]);
    currAnswer.filter((response: string) => {
      response === 'a' ? (this.resA = response) : -1,
        response === 'b' ? (this.resB = response) : -1,
        response === 'c' ? (this.resC = response) : -1;
    });
  }
  findTheGoodResponse(response: string) {
    const goodRes = this.currentAnswer.responses[0].goodRes;
    response === goodRes
      ? response === this.resA
      : response === this.resB || this.resC;
    if (response === goodRes) {
      console.log('good :>> ', response);
    } else {
      console.log('Bad :>> ', response);
    }
  }
  selectResponse(response: string) {
    this.findTheGoodResponse(response);
  }
  nextQuestion() {
    this.questionCounter += 1;
    this.currentQuestion = this.datasByPage.questionsById[this.questionCounter];
    this.currentAnswer = this.datasByPage.questionsById[this.questionCounter];
  }
  getDatasQuizByPage() {
    // get from quiz component all data you need to questions, answers...
    // second affect to current var, datas correponding like currentQuestion, currentAnswer etc...
    this.datasByPage = history.state;
    this.currentQuestion = this.datasByPage.questionsById[this.questionCounter];
  }
}
