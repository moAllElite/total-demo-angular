import {LOCALE_ID, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr);
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProduitComponent } from './produit/produit.component';
import { NouveauProduitComponent } from './nouveau-produit/nouveau-produit.component';
import { HomeComponent } from './home/home.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {ProduitService} from "./services/produit.service";
import {registerLocaleData} from "@angular/common";
import { NotFoundComponent } from './not-found/not-found.component';
import { EditProduitComponent } from './edit-produit/edit-produit.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppErrorComponent } from './app-error/app-error.component';

@NgModule({
  declarations: [
    AppComponent,
    ProduitComponent,
    NouveauProduitComponent,
    HomeComponent,
    NotFoundComponent,
    EditProduitComponent,
    DashboardComponent,
    NavbarComponent,
    AppErrorComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,

    ],
  providers: [
      ProduitService,
      { provide: LOCALE_ID, useValue: 'fr-FR'},
  ],
  bootstrap: [AppComponent],

})
export class AppModule { }
