import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from '../appServices/header.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private _header: HeaderService, private router: Router) {}

  ngOnInit(): void {}
  onLoggedInUser(username: any, password: any) {
    let uname = username.value;
    let pass = password.value;
    if (pass == 123) {
      this._header.loginUser.next(uname);
      this.router.navigate(['']);
    } else {
      alert('please fill correct value');
    }
  }
}
