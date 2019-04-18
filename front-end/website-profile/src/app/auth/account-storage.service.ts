import { Injectable } from '@angular/core';
const USERNAME_KEY = 'AuthUsername';
const NAME_KEY = 'Authname';
const ADDRESS_KEY = 'AuthAddress';
const EMAIL_KEY = 'AuthEMAIL';
const DATE_KEY = 'AuthDATE';
const PASSWORD_KEY = "PASS_KEY"
@Injectable({
  providedIn: 'root'
})
export class AccountStorageService {

  constructor() { }
  signOut() {
    window.localStorage.clear();
  }

  public saveUsername(username: string) {
    window.localStorage.removeItem(USERNAME_KEY);
    window.localStorage.setItem(USERNAME_KEY, username);
  }

  public getUsername(): string {
    return localStorage.getItem(USERNAME_KEY);
  }

  public saveName(name: string) {
    window.localStorage.removeItem(NAME_KEY);
    window.localStorage.setItem(NAME_KEY, name);
  }

  public getName(): string {
    return localStorage.getItem(NAME_KEY);
  }

  public saveAddress(address: string) {
    window.localStorage.removeItem(ADDRESS_KEY);
    window.localStorage.setItem(ADDRESS_KEY, address);
  }

  public getAddress(): string {
    return localStorage.getItem(ADDRESS_KEY);
  }

  public saveEmail(email: string) {
    window.localStorage.removeItem(EMAIL_KEY);
    window.localStorage.setItem(EMAIL_KEY, email);
  }

  public getEmail(): string {
    return localStorage.getItem(EMAIL_KEY);
  }

  public saveMyDate(date: string) {
    window.localStorage.removeItem(DATE_KEY);
    window.localStorage.setItem(DATE_KEY, date);
  }

  public getMyDate(): string {
    return localStorage.getItem(DATE_KEY);
  }

  public savePassword(password: string) {
    window.localStorage.removeItem(PASSWORD_KEY);
    window.localStorage.setItem(PASSWORD_KEY, password);
  }

  public getPassword(): string {
    return localStorage.getItem(PASSWORD_KEY);
  }
}
