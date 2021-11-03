import { Component, OnInit } from '@angular/core';
import { QuizInformations } from '../services/quizInformations';

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
  currentAnswer: any = {};
  answerCounter: any = 0;
  constructor(private quizDataService: QuizInformations) {}
  ngOnInit() {
    this.quizDataService.currentMessage.subscribe(
      (msg) => (this.selectedMessage = msg + 'banane')
    );
    this.getDatasQuizByPage();
    // this.goodAnswersCounter();
  }
  getQuiz() {
    this.quizDataService.changeMessage('tape');
  }

  ngAfterViewInit() {}

  nextQuestion() {
    this.goodAnswersCounter();
    this.questionCounter += 1;
    this.currentQuestion = this.datasByPage.questionsById[this.questionCounter];
    console.log(
      'this.currentQuestion NEXT QUESTION :>> ',
      this.currentQuestion
    );
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
