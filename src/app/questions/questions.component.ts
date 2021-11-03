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
  currentQuestion: any = {};
  questionCounter: any = 0;
  currentAnswer: any = [];
  answerCounter: any = 0;
  @Input() response: string = '';
  resA: string[] = [];
  resB: string[] = [];
  resC: string[] = [];
  constructor(private quizDataService: QuizInformations) {}
  // responseA: string = this.currentQuestion.responses.a;
  ngOnInit() {
    this.quizDataService.currentMessage.subscribe(
      (msg) => (this.selectedMessage = msg + 'banane')
    );
    this.getDatasQuizByPage();
    this.currentAnswer = this.datasByPage.questionsById[this.questionCounter];
    console.log('this.currentAnswer :>> ', this.currentAnswer);
    // this.goodAnswersCounter();
    const currResA = Object.keys(this.currentAnswer.responses[0]);
    console.log('currResA :>> ', currResA);
    const resA = currResA.filter((e: any) => e === 'a');
    console.log('resA :>> ', resA);
    const resB = currResA.filter((e: any) => e === 'b');
    this.resA = resA;
    console.log('resB :>> ', resB);
    this.resB = resB;
    const resC = currResA.filter((e: any) => e === 'c');
    console.log('resC :>> ', resC);
    this.resC = resC;
    console.log('this.responseA :>> ', this.resA);
  }
  getQuiz() {
    this.quizDataService.changeMessage('tape');
  }

  ngAfterViewInit() {}
  selectResponse(response: string[]) {
    const goodRes = this.currentAnswer.responses[0].goodRes;
    console.log('goodRes :>> ', goodRes);
    if (response.toString() === goodRes) {
      console.log('GOOD :>> ');
    } else {
      console.log('BAD :>> ');
    }
    if (response === this.resA) {
      console.log('this.resA :>> ', this.resA);
    }
    if (response === this.resB) {
      console.log('this.resB :>> ', this.resB);
    }
    if (response === this.resC) {
      console.log('this.resC :>> ', this.resC);
    }
  }
  nextQuestion() {
    this.goodAnswersCounter();
    this.questionCounter += 1;
    this.currentQuestion = this.datasByPage.questionsById[this.questionCounter];
    this.currentAnswer = this.datasByPage.questionsById[this.questionCounter];
  }

  goodAnswersCounter() {
    const qById =
      this.datasByPage.questionsById[this.questionCounter].idQuestion;
    console.log('qById :>> ', qById);
    // if (goodReponse) {
    //   console.log('good :>> ', good);
    // } else {
    //   console.log('bad :>> ', bad);
    // }
  }

  getDatasQuizByPage() {
    this.datasByPage = history.state;
    console.log('this.datasByPage :>> ', this.datasByPage);
    this.currentQuestion = this.datasByPage.questionsById[this.questionCounter];
  }
}
