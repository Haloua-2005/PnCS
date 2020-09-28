import { Component, OnInit } from '@angular/core';
import { AthentificationService } from '../Services/athentification.service';
import { Router } from '@angular/router';
import { SignInService } from '../Services/sign-in.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  problemBool:boolean=false

  constructor(
    private auth:AthentificationService,
    private router:Router,
    private sign:SignInService
    ){ }

  Login(logForm) {
    this.auth.LogData(logForm.value).subscribe(
      (data) => {
        localStorage.setItem('token', data.id)
        this.router.navigate(['home'])
        alert("Successfuly Loged ! " )
      },
      (error) => {
        console.log(error)
        alert("The Informations are False, please check your Informations !")
      }
    )
  }

  ngOnInit(): void {
    this.problemBool = this.sign.problemBool
  }

}
