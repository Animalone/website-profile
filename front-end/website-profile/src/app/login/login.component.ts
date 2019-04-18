import { Component, OnInit } from '@angular/core';
import { AccountViewModel } from '../auth/accountViewModel';
import {ApiService} from "../auth/api.service";
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
  constructor(private apiService: ApiService) { }

  ngOnInit() {
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
