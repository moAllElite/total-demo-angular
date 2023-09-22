import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {ProduitComponent} from "./produit/produit.component";
import {HomeComponent} from "./home/home.component";
import {NouveauProduitComponent} from "./nouveau-produit/nouveau-produit.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {EditProduitComponent} from "./edit-produit/edit-produit.component";

const routes: Routes = [
  {path:'',component:HomeComponent},
  { path :"produits",component : ProduitComponent },
  {path : "home" ,component:HomeComponent},
  {path :'nouveauProduit',component:NouveauProduitComponent},
  {path:"editProduit/:id",component:EditProduitComponent},
  {path:'**',pathMatch:'full',component:NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
