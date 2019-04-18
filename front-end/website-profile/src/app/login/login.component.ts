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
        this.accountStorage.saveMyDate(data.date);
      },
      error => {
        console.log(error);
        this.errorMessage = error.error.message;
        this.isLoginFailed = true;
      })
  }

}


// import { TokenStorageService } from '../auth/token-storage.service';


// export class LoginComponent implements OnInit {

//   private loginInfo: AuthLoginInfo;

//   constructor(private authService: AuthService, private tokenStorage: TokenStorageService) { }

//   ngOnInit() {
//     if (this.tokenStorage.getToken()) {
//       this.isLoggedIn = true;
//       this.roles = this.tokenStorage.getAuthorities();
//     }
//   }

//   onSubmit() {


//     this.authService.attemptAuth(this.loginInfo).subscribe(
//       data => {
//         this.tokenStorage.saveToken(data.accessToken);
//         this.tokenStorage.saveUsername(data.username);
//         this.tokenStorage.saveAuthorities(data.authorities);

//         this.isLoginFailed = false;
//         this.isLoggedIn = true;
//         this.roles = this.tokenStorage.getAuthorities();
//         this.reloadPage();
//       },
//       error => {
//         console.log(error);
//         this.errorMessage = error.error.message;
//         this.isLoginFailed = true;
//       }
//     );
//   }

//   reloadPage() {
//     window.location.reload();
//   }
// }
