import { Component, OnInit } from '@angular/core';
import { Produit } from '../Produitss'
import { MaterialsService } from '../Services/materials.service';

@Component({
  selector: 'app-acrylics',
  templateUrl: './acrylics.component.html',
  styleUrls: ['./acrylics.component.css']
})
export class AcrylicsComponent implements OnInit {

  AcrylicRanger = new Produit ("Acrylic Color", "Acrylic of instence color, permanent, water resistent and Flexible when dry","8 tubes x 22ml","ART RANGER",'../assets/Acrulic.jpg')
  AcrylicFB = new Produit ("Acrylic","5 Primary colors, Fasy dry, Creamy and Homogeneous","5 tubes x 80ml","LEFRANC BOURGEOIS","../assets/AcrulicFB.jpg")
  AcrylicLiquitex = new Produit ("BASICS Acrylic","5 Primary color, Acrylic Paint Set","5 tubes x 188ml","Liquitex","../assets/AcrulicLiqutex.jpg")
  AcrylicStar = new Produit ("Star Acrylic","5 Primary color, Satin acrylic paint with intense colors, Can be diluted with water, Permanent colors resistant to water and flexible after drying, Applicable on multiple supports; canvas, cardboard, wood, paper, etc ...","5 tubes x 100ml","Star Color","../assets/AcrulicStar.jpg")

  constructor(
    private materials:MaterialsService,
  ) {
  }
  public Acrylics = [this.AcrylicRanger, this.AcrylicFB, this.AcrylicLiquitex, this.AcrylicStar]

  ClickToAdd(material) {
    this.materials.getMaterial(material)
  }

  ngOnInit(): void {
    console.log(this.Acrylics)
  }

}
