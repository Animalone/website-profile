import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  isSignedUp = false;
  form: any = {};
  constructor() { }

  ngOnInit() {
  }
  onSubmit() {
    console.log(this.form);
  }
}
