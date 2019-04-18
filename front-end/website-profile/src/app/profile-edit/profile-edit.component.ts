import { Component, OnInit } from '@angular/core';
import { AccountStorageService } from '../auth/account-storage.service';
import {ApiService} from "../auth/api.service";
import { AccountViewModel } from '../auth/accountViewModel';
import {HttpClient} from "@angular/common/http";
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.css']
})
export class ProfileEditComponent implements OnInit {
  isUpdateFail = false;
  form: any = {};
  errorMessage = '';
  accountViewModel: AccountViewModel;
  constructor(private router: Router, private accountStorage: AccountStorageService, private apiService: ApiService) { }

  ngOnInit() {
  	if (this.accountStorage.getUsername()) {
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
      this.form.name,
      this.form.password,
      this.form.email,
      this.form.date,
      this.form.inputAddress);

    this.apiService.registerAccount(this.accountViewModel).subscribe(
      data => {
        console.log(data);
        this.accountStorage.saveUsername(data.user_name);
        this.accountStorage.saveName(data.name);
        this.accountStorage.saveAddress(data.address);
        this.accountStorage.saveEmail(data.email);
        this.accountStorage.saveMyDate(data.date);
        this.isUpdateFail = false;
        this.router.navigate(['login']);
      },
      error => {
        console.log(error);
        this.errorMessage = error.error.message;
        this.isUpdateFail = true;
      }
    );
  }

}
