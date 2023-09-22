import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  actions : Array<any> = [
    {title: 'Accueil', "route": "/home", icon:"house"},
    {title: 'Produits', "route": "/produits", icon:"search"},
    {title: 'Nouveau Produit', "route": "/nouveauProduit", icon:"plus-circle"},
  ];

  currentAction : any;





}
