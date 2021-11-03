import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuizComponent } from './quiz/quiz.component';
import { QuestionsComponent } from './questions/questions.component';
import { QuizInformations } from './services/quizInformations';

@NgModule({
  declarations: [AppComponent, QuizComponent, QuestionsComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [QuizInformations],
  bootstrap: [AppComponent],
})
export class AppModule {}
