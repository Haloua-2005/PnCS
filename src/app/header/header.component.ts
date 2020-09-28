import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AthentificationService } from '../Services/athentification.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private auth:AthentificationService,
    private router:Router
  ) { }

  isAuth:boolean = this.auth.isAuthenticated()

  logout(){
    localStorage.removeItem('token')
    this.router.navigate(['home'])
  }

  ngOnInit(): void {
  }

}
