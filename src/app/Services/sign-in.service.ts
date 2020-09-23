import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const LINK='https://immense-citadel-91115.herokuapp.com/api/Users'
@Injectable({
  providedIn: 'root'
})
export class SignInService {
  problemBool = false

  SignIn(credentials) {
    return this.http.post<any>(LINK, credentials)
  }

  constructor(
    private http:HttpClient
    ) { }
}
