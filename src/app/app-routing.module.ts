import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionsComponent } from './questions/questions.component';
import { QuizComponent } from './quiz/quiz.component';
import { GamerAccountComponent } from './gamer-account/gamer-account.component';
import { LoginComponent } from './login/login.component';
import { ManageQuestionsComponent } from './manage-questions/manage-questions.component';

const routes: Routes = [
  { path: '', component: QuizComponent },
  { path: 'questions/:quizName', component: QuestionsComponent },
  { path: 'gamer', component: GamerAccountComponent },
  { path: 'login', component: LoginComponent },
  { path: 'manage-questions', component: ManageQuestionsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
