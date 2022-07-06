import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HeaderService } from '../appServices/header.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit, OnDestroy {
  constructor(private _header: HeaderService) {
    this._header.headerontctDetils.next(true);
    this._header.hederLoginBock.next(false);
  }

  ngOnInit() {}
  ngOnDestroy() {
    this._header.headerontctDetils.next(false);
    this._header.hederLoginBock.next(true);
  }
  setdefault = 'html';
  username = '';
  onSubmit(form: NgForm) {
    console.log(form);
  }
}
