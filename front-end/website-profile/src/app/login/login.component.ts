import { Component, OnInit } from '@angular/core';
import { AccountViewModel } from '../auth/accountViewModel';
import {ApiService} from "../auth/api.service";
import { AccountStorageService } from '../auth/account-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: any = {};
  accountViewModel: AccountViewModel;
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  constructor(private apiService: ApiService, private accountStorage: AccountStorageService) { }

  ngOnInit() {
    if (this.accountStorage.getUsername()) {
      this.isLoggedIn = true;
      this.form.username = this.accountStorage.getUsername();
      this.form.email = this.accountStorage.getEmail();
      this.form.name = this.accountStorage.getName();
      this.form.date = this.accountStorage.getMyDate();
      this.form.inputAddress = this.accountStorage.getAddress();
    }
  }
  onSubmit() {
    console.log(this.form);
    this.accountViewModel = new AccountViewModel(
      this.form.username,
      " ",
      this.form.password,
      " ",
      " ",
      " ");
    this.apiService.loginAccount(this.accountViewModel).subscribe(
      data => {
        console.log(data);
        this.isLoggedIn = true;
        this.isLoginFailed = false;
        this.accountStorage.saveUsername(data.user_name);
        this.accountStorage.saveName(data.name);
        this.accountStorage.saveAddress(data.address);
        this.accountStorage.saveEmail(data.email);
        this.accountStorage.saveMyDate(data.birthDate);
        this.form.username = this.accountStorage.getUsername();
        this.form.email = this.accountStorage.getEmail();
        this.form.name = this.accountStorage.getName();
        this.form.date = this.accountStorage.getMyDate();
        this.form.inputAddress = this.accountStorage.getAddress();
      },
      error => {
        console.log(error);
        this.errorMessage = error.error.message;
        this.isLoginFailed = true;
      })
  }
  logout(){
    this.accountStorage.signOut();
    this.isLoggedIn = false;
  }

}