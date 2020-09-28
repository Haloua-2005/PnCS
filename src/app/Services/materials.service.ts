import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Produit } from '../Produitss';

const P_LINK=''
const G_LINK=''

@Injectable({
  providedIn: 'root'
})
export class MaterialsService {

  NumberOfMaterial = 0;

  product = new Subject<Produit>();

  productList = []

  getMaterial(produit:Produit) {
    this.product.next(produit)
    this.productList.unshift(produit)
  }

  removeMaterial(indice) {
    this.productList.splice(indice, 1)
  }

  constructor(
    private http:HttpClient
  ) { }
}
