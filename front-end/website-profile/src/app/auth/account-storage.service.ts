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
  public signOut() {
    window.sessionStorage.clear();
  }

  public saveUsername(username: string) {
    window.sessionStorage.removeItem(USERNAME_KEY);
    window.sessionStorage.setItem(USERNAME_KEY, username);
  }

  public getUsername(): string {
    return sessionStorage.getItem(USERNAME_KEY);
  }

  public saveName(name: string) {
    window.sessionStorage.removeItem(NAME_KEY);
    window.sessionStorage.setItem(NAME_KEY, name);
  }

  public getName(): string {
    return sessionStorage.getItem(NAME_KEY);
  }

  public saveAddress(address: string) {
    window.sessionStorage.removeItem(ADDRESS_KEY);
    window.sessionStorage.setItem(ADDRESS_KEY, address);
  }

  public getAddress(): string {
    return sessionStorage.getItem(ADDRESS_KEY);
  }

  public saveEmail(email: string) {
    window.sessionStorage.removeItem(EMAIL_KEY);
    window.sessionStorage.setItem(EMAIL_KEY, email);
  }

  public getEmail(): string {
    return sessionStorage.getItem(EMAIL_KEY);
  }

  public saveMyDate(date: string) {
    window.sessionStorage.removeItem(DATE_KEY);
    window.sessionStorage.setItem(DATE_KEY, date);
  }

  public getMyDate(): string {
    return sessionStorage.getItem(DATE_KEY);
  }

  public savePassword(password: string) {
    window.sessionStorage.removeItem(PASSWORD_KEY);
    window.sessionStorage.setItem(PASSWORD_KEY, password);
  }

  public getPassword(): string {
    return sessionStorage.getItem(PASSWORD_KEY);
  }
}
