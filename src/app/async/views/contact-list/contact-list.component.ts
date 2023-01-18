import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent {
  constructor(private _router: Router) { }

  // items=[];
  lista:any[] = [];
  jsonData: any = "";
  // recibir(mensaje:any[]){
  //   this.lista = mensaje
  // }
  country: string = "";

  filterByCountry(){
    this._router.navigate(['/contacto-info/'+ this.country])
    //this.country

  }
  ngOnInit(){
    this.jsonData = localStorage.getItem("lista");
    this.lista = JSON.parse(this.jsonData)
  }
}
