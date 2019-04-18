import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {AccountViewModel} from "./accountViewModel";
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private BASE_URL = "https://n736i2jxrb.execute-api.ap-southeast-2.amazonaws.com/dev";
  public profile_URL = `${this.BASE_URL}/profile`;
  public login_URL = `${this.BASE_URL}/login`;
  // private  httpOptions = {
  //   headers: new HttpHeaders({
  //     'Content-Type':  'application/json',
  //     "Access-Control-Allow-Origin":"*"
  //   })
  // };
  constructor(private http: HttpClient) {}
  registerAccount(account: AccountViewModel): Observable<any> {
    return this.http.post(this.profile_URL, account);
  }

  loginAccount(account: AccountViewModel): Observable<any> {
    return this.http.post(this.login_URL, account);
  }
}
