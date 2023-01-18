import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-contact-info',
    templateUrl: './contact-info.component.html',
    styleUrls: ['./contact-info.component.css']
})
export class ContactInfoComponent {
    constructor(private rutaActiva: ActivatedRoute) { }
    country:string = "";
    
    lista:any[] = [];
    jsonData: any = "";
    ngOnInit(): void {
        this.country = this.rutaActiva.snapshot.params["country"];
        this.jsonData = localStorage.getItem("lista");
        this.lista = JSON.parse(this.jsonData)
    }

    

}
