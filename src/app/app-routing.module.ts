import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionsComponent } from './questions/questions.component';
import { QuizComponent } from './quiz/quiz.component';
import { GamerAccountComponent } from './gamer-account/gamer-account.component';

const routes: Routes = [
  { path: '', component: QuizComponent },
  { path: 'questions/:quizName', component: QuestionsComponent },
  { path: 'gamer', component: GamerAccountComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
