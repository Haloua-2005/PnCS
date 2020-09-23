import { Injectable } from '@angular/core';
import { SignInService } from './sign-in.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

const AUTH_LINK='https://immense-citadel-91115.herokuapp.com/api/Users/login'
@Injectable({
  providedIn: 'root'
})
export class AthentificationService {

  isAuthenticated() {
    return !!localStorage.getItem('token')
  }

  LogData(credentials) {
    return this.http.post<any>(AUTH_LINK, credentials)
  }

  LogOut() {
    localStorage.removeItem('token')
    this.router.navigate(['home'])
  }

  constructor(
    private http:HttpClient,
    private sign:SignInService,
    private router:Router
  ) { }
}
