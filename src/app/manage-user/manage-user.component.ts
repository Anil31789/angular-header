import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
// import { user } from './user.model';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-manage-user',
  templateUrl: './manage-user.component.html',
  styleUrls: ['./manage-user.component.css'],
})
export class ManageUserComponent implements OnInit {
  @ViewChild('userForm') userForm!: NgForm;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fatchUser();
  }
  editMode: boolean = false;
  editUrl: any;
  url =
    'https://my-project-1504072703875-default-rtdb.firebaseio.com/user.json';
  users: any = [
    // { name: 'Anil', technology: 'html' },
    // { name: 'kumar', technology: 'css' },
  ];
  onAddUser(userData: { userId?: string; name: string; technology: string }) {
    if (this.userForm.valid) {
      if (this.editMode) {
        let updateUrl =
          'https://my-project-1504072703875-default-rtdb.firebaseio.com/user/' +
          this.editUrl +
          '.json';
        // console.log('updateUrl', updateUrl);
        this.http.put(updateUrl, userData).subscribe((res) => {
          console.log(res);
          this.fatchUser();
        });
      } else {
        console.log(userData.name);
        this.users.push(userData);
        this.http.post(this.url, userData).subscribe((res) => {
          console.log(res);
        });
      }
    } else {
      console.log('error');
    }
  }
  fatchUser() {
    this.http
      .get(this.url)
      .pipe(
        map(function (resData) {
          console.log('test', resData);
          var testData = JSON.parse(JSON.stringify(resData));
          console.log('psk1', testData);
          const userArray: any = [];
          for (const key in testData) {
            // console.log(key);
            // console.log(testData[key]);
            // console.log(testData[key].name);

            userArray.push({ userId: key, ...testData[key] });
            console.log({ userId: key, ...testData[key] });
          }
          return userArray;
        })
      )
      .subscribe((response) => {
        console.log(response);
        const data = JSON.stringify(response);
        console.log(data);
        // this.sers = JSON.parse(data);
        this.users = JSON.parse(data);
      });
  }
  onEditUser(userId: any, index: any) {
    this.editMode = true;
    // console.log(userId);
    // console.log(this.users[index]);
    this.editUrl = userId;
    this.userForm.setValue({
      name: this.users[index].name,
      technology: this.users[index].technology,
    });
  }
  onDeleteUser(userId: any) {
    if (confirm('Do you want to delete this Item?')) {
      // console.log('userId', userId);

      let deleteUrl =
        'https://my-project-1504072703875-default-rtdb.firebaseio.com/user/' +
        userId +
        '.json';
      console.log(deleteUrl);

      this.http.delete(deleteUrl).subscribe(() => {
        this.fatchUser();
      });
    }
  }
}
