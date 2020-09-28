import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MaterialsService } from '../Services/materials.service';

const SEND_LINK = ""
@Component({
  selector: 'app-command',
  templateUrl: './command.component.html',
  styleUrls: ['./command.component.css']
})
export class CommandComponent implements OnInit {
  theListofMaterials = this.materials.productList
  numberProduct = this.theListofMaterials.length
  numberMaterial:number

  constructor(
    private materials:MaterialsService,
    private http:HttpClient
  ) { }

  remove(indice){
    this.materials.removeMaterial(indice)
    this.numberMaterial--
    console.log(this.numberMaterial)
  }

  send(form:NgForm){

  }

  ngOnInit(): void {
    console.log(this.theListofMaterials)
  }

  // Get the modal
  modal = document.getElementById("myModal");

  // Get the button that opens the modal
    btn = document.getElementById("myBtn");

  // Get the <span> element that closes the modal
    span = document.getElementsByClassName("close")[0];

  // When the user clicks on the button, open the modal
    btnonclick() {
    this.modal.style.display = "block";
  }

  // When the user clicks on <span> (x), close the modal
    spanonclick() {
    this.modal.style.display = "none";
  }


}
