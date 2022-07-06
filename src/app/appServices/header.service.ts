import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HeaderService {
  constructor() {}

  headerontctDetils = new BehaviorSubject(false); // for heder contat details
  hederLoginBock = new BehaviorSubject(true); // for heder contat details
  loginUser = new BehaviorSubject(''); // for heder contat details
}
