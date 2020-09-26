import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent implements OnInit {
  FirstCarousel = ["","",""]
  SecondCarousel = ["","",""]
  ThirdCarousel = ["","",""]
  FourthCarousel = ["","",""]

  constructor(
    private router:Router
  ) { }

  goToLink(link){
    this.router.navigate(link)
  }

  ngOnInit(): void {
  }

}
