import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import 'rxjs';
import { QuizInformations } from '../services/quizInformations';
@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.sass'],
})
export class QuizComponent implements OnInit {
  currentQuizList: any = {};
  currentQuestions: any = {};
  currentResponses: any = {};

  quizTitle: string = 'Choose a theme';
  constructor(
    private router: Router,
    private quizInformations: QuizInformations
  ) {}

  ngOnInit(): void {
    this.showQuizList();
    this.currentQuestions = this.quizInformations.getQuestions();
  }
  ngAfterViewInit() {}

  showQuizList() {
    this.currentQuizList = this.quizInformations.getQuizList();
  }

  navigateTo(pageName: string) {
    const page = this.currentQuizList.filter((e: any) => e.page === pageName);
    const questionsById = this.currentQuestions.filter(
      (q: any) => q.idQuiz === page[0]?.quizId
    );
    this.router.navigate([`/questions/${pageName}`], {
      state: { page, questionsById },
    });
  }
}
