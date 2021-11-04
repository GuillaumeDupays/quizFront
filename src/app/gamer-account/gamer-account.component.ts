import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAccountService } from '../user-account.service';

@Component({
  selector: 'app-gamer-account',
  templateUrl: './gamer-account.component.html',
  styleUrls: ['./gamer-account.component.sass'],
})
export class GamerAccountComponent implements OnInit {
  userName: string = '';
  icon: string = '';
  isGamerExist: boolean = false;
  createdUser: {} = {};
  constructor(
    private userAccountService: UserAccountService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  saveNewGamer(newGamer: string, newIcon: string) {
    this.createdUser = {
      newGamer: newGamer,
      newIcon: newIcon,
    };
    this.userAccountService.saveNewUser(newGamer, newIcon);
    console.log('newGamer :>> ', newGamer);
    console.log('newIcon :>> ', newIcon);
    this.isGamerExist = true;
  }
  startAGame() {
    console.log('start :>> ');
    if (this.isGamerExist) {
      console.log('il existe :>> ');
      this.router.navigate(['/'], {
        state: this.createdUser,
      });
    } else {
      console.log('bah non :>> ');
    }
  }
}
