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
  constructor(
    private fb: FormBuilder,
    private questionService: QuizInformations
  ) {
    this.form = this.fb.group({
      quizName: ['', Validators.required],
      numQuestion: ['', Validators.required],
      contentQuestion: ['', Validators.required],
      responseA: ['', Validators.required],
      responseB: ['', Validators.required],
      responseC: ['', Validators.required],
    });
  }

  ngOnInit(): void {}
  addQuestion() {
    const form = this.form.value;
    console.log('form :>> ', form);
    const newQuestion: Question = {
      idQuiz: 1,
      idQuestion: 1,
      numQuestion: form.numQuestion,
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
    this.questionService.createQuestion(newQuestion).subscribe();
  }
}
