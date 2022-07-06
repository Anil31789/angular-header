import { Router } from '@angular/router';
import { HeaderService } from './../../appServices/header.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  // New Properties for Updated Header Concepts//
  gobackLink: boolean = false;
  headerNav: boolean = true;
  hederLoginBock: boolean;
  headerontctDetils: boolean = true;
  loginUser: any;

  constructor(private _header: HeaderService, private router: Router) {
    // for heder contat details

    this.hederLoginBock = true;
  }
  logout() {
    this._header.loginUser.next('');
    this.router.navigate(['login']);
  }
  ngOnInit(): void {}
  ngAfterViewInit() {
    this._header.headerontctDetils.subscribe((res) => {
      this.headerontctDetils = res;
    });
    // for heder contat details
    this._header.hederLoginBock.subscribe((res) => {
      this.hederLoginBock = res;
    });
    // for heder contat details
    this._header.loginUser.subscribe((res) => {
      this.loginUser = res;
    });
  }
}
