import { Component, OnInit } from '@angular/core';
import {ApiService} from "../auth/api.service";
import { AccountViewModel } from '../auth/accountViewModel';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: any = {};
  accountViewModel: AccountViewModel;
  isSignedUp = false;
  isSignUpFailed = false;
  errorMessage = '';
  constructor(private apiService: ApiService) {}

  ngOnInit() {
  }
  onSubmit() {
    console.log(this.form);
    this.accountViewModel = new AccountViewModel(
      this.form.username,
      this.form.name,
      this.form.password,
      this.form.email,
      this.form.date,
      this.form.inputAddress);

    this.apiService.registerAccount(this.accountViewModel).subscribe(
      data => {
        console.log(data);
        this.isSignedUp = true;
        this.isSignUpFailed = false;
      },
      error => {
        console.log(error);
        this.errorMessage = error.error.message;
        this.isSignUpFailed = true;
      }
    );
  }
}

