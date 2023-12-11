import { Component, OnInit } from '@angular/core';
import { Produit } from '../Model/Produit.model';
import { ProduitService } from '../services/produit.service';
@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html',
  styleUrls: ['./add-produit.component.css']
  
})
export class AddProduitComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  newProduit = new Produit();
  constructor(private produitService: ProduitService) { }  
  addProduit(){
    console.log(this.newProduit);
    this.produitService.ajouterProduit(this.newProduit);
    }
}
