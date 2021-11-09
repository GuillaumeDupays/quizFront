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
  quizId: string = '';
  newQuestion: Question = {
    autor: 'Guillaume',
    theme: '',
    idQuiz: '',
    idQuestion: 0,
    numQuestion: 0,
    contentQuestion: '',
    responses: [
      {
        a: '',
        b: '',
        c: '',
        goodRes: '',
      },
    ],
  };
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
  // generate unique id to retrieve questions by theme
  // this id generated is unique for questions by theme and quiz theme
  generateQuizId() {
    if (this.quizId === '') {
      const quizName = this.quizTheme;
      const quizAutor = 'Guillaume';
      const date = Date.now();
      const newQuizId = quizName + quizAutor + date;
      this.quizId = newQuizId;
    }
  }
  saveQuestions() {
    console.log('saveQuestions :>> ');
    this.generateQuizId();
    console.log('this.quizId :>> ', this.quizId);
    // get the generate unique id for this quiz
    // quiz and questions have the same generated id
  }
  addQuestion() {
    const form = this.form.value;
    form.theme ? (this.quizTheme = form.theme) : (form.theme = this.quizTheme);

    const idQuiz = this.quizId;
    const newIdQuestion = this.numberQuestion
      .toString()
      .concat(idQuiz.toString());
    this.generateQuizId();
    this.newQuestion = {
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
    console.log('newQuestion :>> ', this.newQuestion);
    this.form.reset();
    // this.questionService.createQuestion(newQuestion).subscribe();
    this.isThemeChosen = true;
    this.numberQuestion += 1;
  }
}
