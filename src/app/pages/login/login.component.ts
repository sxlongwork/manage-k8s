import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { Token, UserInfo } from 'src/app/services/data-types';
import { LoginService } from 'src/app/services/login.service';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  // submitTime = new Date();
  validateForm: FormGroup;
  userinfo: UserInfo
  token: Token

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private loginService: LoginService,
    private message: MessageService
  ) { }

  ngOnInit() {
    if (localStorage.getItem('token')){
      this.router.navigateByUrl('home')
    }

    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true]
    });
    // console.log('message:', this.message)
  }
  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }

    this.userinfo = {
      username: this.userName.value,
      password: this.password.value,
      // oneTimeCode: this.submitTime.getTime()
    };

    if (this.validateForm.valid) {
      // if (this.userinfo.username === 'admin' && this.userinfo.password === '1234') {
      //   console.log('loginParams',this.userinfo.username, this.userinfo.password)
      //   localStorage.setItem("username", this.userinfo.username)
      //   this.router.navigateByUrl('home/info');
      // }
      this.loginService.getToken(this.userinfo).subscribe(
        (res) => {
          this.token = JSON.parse(JSON.stringify(res))
          // console.log('res:', this.token);
          this.refreshToken(this.token.tokenString, this.userinfo.username);
          this.router.navigateByUrl('home');
          // console.log(res.status)
        }
        , error => {
          this.handleError(error);
        }
      )
    }
  }

  refreshToken(token: string, username: string){
    this.clearOldInfo()
    localStorage.setItem('token', token);
    localStorage.setItem('isLogin','true');
    sessionStorage.setItem('username', username);
  }
  clearOldInfo(){
    localStorage.removeItem('token');
    // localStorage.removeItem
  }
  

  handleError(error: HttpErrorResponse) {
    if (error.status === 500) {
      // A client-side or network error occurred. Handle it accordingly.
      // console.error('An error occurred:', error.error);
      // console.log('error:',`${error.error}`)
      // console.log('message:', this.message)
      this.message.createMessage('error', `${error.error}`);
      // this.router.navigateByUrl('')

    } else {
      this.message.createMessage('error', '服务器繁忙,请稍后重试...');
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }

  get userName() { return this.validateForm.controls.userName; }
  get password() { return this.validateForm.controls.password; }



}
