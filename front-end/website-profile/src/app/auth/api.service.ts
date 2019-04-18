import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private BASE_URL = "https://n736i2jxrb.execute-api.ap-southeast-2.amazonaws.com/dev";
  public profile_URL = `${this.BASE_URL}/profile`;
  public login_URL = `${this.BASE_URL}/login`;

  registerAccount(account: AccountViewModel): Observable<any> {
    return this.http.post(this.profile_URL, account);
  }

  loginAccount(account: AccountViewModel): Observable<any> {
    return this.http.post(this.login_URL, account);
  }
}

