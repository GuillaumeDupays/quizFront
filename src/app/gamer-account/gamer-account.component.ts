import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { UserAccountService } from '../user-account.service';

@Component({
  selector: 'app-gamer-account',
  templateUrl: './gamer-account.component.html',
  styleUrls: ['./gamer-account.component.sass'],
})
export class GamerAccountComponent implements OnInit {
  isGamerExist: boolean = false;
  createdUser: {} = {};
  form: FormGroup;
  constructor(
    private fb: FormBuilder,
    private userAccountService: UserAccountService,
    private router: Router
  ) {
    this.form = this.fb.group({
      userName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      icon: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  saveNewGamer() {
    // this.createdUser = {
    //   newGamer: newGamer,
    //   newIcon: newIcon,
    // };
    const formVal = this.form.value;
    const newUser: User = {
      username: formVal.userName,
      email: formVal.email,
      password: formVal.password,
      icon: formVal.icon,
    };
    this.userAccountService.saveNewUser({ ...newUser }).subscribe();
    console.log('newUser :>> ', newUser);
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
