import { Component } from '@angular/core';
import { GamerAccountComponent } from './gamer-account/gamer-account.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  title = 'appGameQuiz';
  autor = 'Guillaume';
}
