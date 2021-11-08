import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuizComponent } from './quiz/quiz.component';
import { QuestionsComponent } from './questions/questions.component';
import { QuizInformations } from './services/quizInformations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GamerAccountComponent } from './gamer-account/gamer-account.component';
import { LoginComponent } from './login/login.component';
import { ScoresComponent } from './scores/scores.component';
import { ManageQuestionsComponent } from './manage-questions/manage-questions.component';

@NgModule({
  declarations: [
    AppComponent,
    QuizComponent,
    QuestionsComponent,
    GamerAccountComponent,
    LoginComponent,
    ScoresComponent,
    ManageQuestionsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [QuizInformations],
  bootstrap: [AppComponent],
})
export class AppModule {}
