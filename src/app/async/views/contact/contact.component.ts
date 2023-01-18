import { Component, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.css']
})
export class ContactComponent {
    // contactos = [];
    // name="";
    // email="";
    // phone="";
    // country="";
    // message="";

    // agregar(){
    //   let obj = {Name:this.name,Email:this.email,Phone:this.phone,Country:this.country,Message:this.message}
    //   this.contactos.push({});
    // }

    constructor(private rutaActiva: ActivatedRoute) { }

    // Simular un entorno de datos
    datos = [
        { Nombre: "Juan", Apellido: "Perez", Categoria: 1 },
        { Nombre: "Arturo", Apellido: "Perez", Categoria: 1 },
        { Nombre: "Maria", Apellido: "Perez", Categoria: 2 },
        { Nombre: "Luis", Apellido: "Perez", Categoria: 1 },
        { Nombre: "Jorge", Apellido: "Perez", Categoria: 2 },
        { Nombre: "Carlos", Apellido: "Perez", Categoria: 1 },
    ]

    // Variable para recibir el parametro enviado desde vistafull
    paramCountry: number = 0;

    // Evento ngOnInit -> Cargar pagina
    // Al cargar la pagina se recibira el valor enviado desde vistafull
    ngOnInit() {
        this.paramCountry = this.rutaActiva.snapshot.params['country'];
    }
    //asd: string[] = []
    // @Output() listaContactos: EventEmitter<any[]> = new EventEmitter<any[]>();

    // EnviarArray() {
    //     this.listaContactos.emit(this.asd);
    // }



    // Reto 17
    datos1:any[] = new Array;

    n = "";
    c = "";
    t = "";
    p = "";
    m = "";

    Agregar() {
        if (this.n != '' && this.c != '' && this.t != '' && this.t != '', this.p != '' && this.m != "") {
            this.datos1.push({ 'Nombre': this.n, 'Correo': this.c, 'Telefono': this.t, 'Pais': this.p, "Mensaje": this.m });
            this.n = "";
            this.c = "";
            this.t = "";
            this.p = "";
            this.m = "";
        } else {
            alert("Debe ingresar todos los datos",);
        }

        let jsonArray:string = JSON.stringify(this.datos1);
        console.log(this.datos1)
        localStorage.setItem("lista",jsonArray);
        // this.listaContactos.emit(this.datos1);
    }


    Eliminar(indice: number) {
        let conf = confirm("¿Desea eliminar?")
        if (conf == true) {
            this.datos1.splice(indice, 1);
        } else {
            return;
        }


    }
}
