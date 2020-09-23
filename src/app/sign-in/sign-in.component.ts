import { Component, OnInit, Output } from '@angular/core';
import { NgForm, NgModelGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { SignInService } from '../Services/sign-in.service';
import { Router } from '@angular/router';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  ProvinceList = [
    'Ariana','Béja','Ben Arous',
    'Bizerte','Gabès','Gafsa',
    'Jendouba','Kairouan','Kasserine',
    'Kebili','Kef','Mahdia',
    'Manouba','Mednine','Monastir',
    'Nabeul','Sfax','Sidi Bouzid',
    'Siliana','Sousse','Tataouine',
    'Tozeur','Tunis','Zaghouan'
  ]

  Signed(LogData:NgForm) {
    this.sign.SignIn(LogData.value).subscribe(
      (data) => {
        console.log(data)
        this.sign.problemBool = false
      },
      (error) => {
        console.log(error)
        this.sign.problemBool = true
      }
    )
    this.router.navigate(['login'])
  }

  constructor(
    private http:HttpClient,
    private sign:SignInService,
    private router:Router,
    ) { }

  ngOnInit(): void {
  }

}
