import { Component, OnInit } from '@angular/core';
import { Produit } from '../Model/Produit.model';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {
  produits : Produit[]; 
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  constructor(private produitService: ProduitService) {
    this.produits = produitService.listeProduits();
   
    }
    

}
