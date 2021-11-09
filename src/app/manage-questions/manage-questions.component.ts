import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Question } from '../models/question';
import { QuizInformations } from '../services/quizInformations';

@Component({
  selector: 'app-manage-questions',
  templateUrl: './manage-questions.component.html',
  styleUrls: ['./manage-questions.component.sass'],
})
export class ManageQuestionsComponent implements OnInit {
  form: FormGroup;
  numberQuestion: number = 0;
  isThemeChosen: boolean = false;
  quizTheme: string = '';
  constructor(
    private fb: FormBuilder,
    private questionService: QuizInformations
  ) {
    this.form = this.fb.group({
      theme: ['', Validators.required],
      contentQuestion: ['', Validators.required],
      responseA: ['', Validators.required],
      responseB: ['', Validators.required],
      responseC: ['', Validators.required],
      goodRes: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.numberQuestion = 1;
  }

  addQuestion() {
    const idQuiz = 1;
    const newIdQuestion = this.numberQuestion
      .toString()
      .concat(idQuiz.toString());
    const form = this.form.value;
    form.theme ? (this.quizTheme = form.theme) : (form.theme = this.quizTheme);

    const newQuestion: Question = {
      autor: 'Guillaume',
      theme: this.quizTheme,
      idQuiz: idQuiz,
      idQuestion: parseInt(newIdQuestion),
      numQuestion: this.numberQuestion,
      contentQuestion: form.contentQuestion,
      responses: [
        {
          a: form.responseA,
          b: form.responseB,
          c: form.responseC,
          goodRes: form.goodRes,
        },
      ],
    };
    console.log('newQuestion :>> ', newQuestion);
    this.form.reset();
    // this.questionService.createQuestion(newQuestion).subscribe();
    this.isThemeChosen = true;
    this.numberQuestion += 1;
  }
}
