import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';


@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.css']
})
export class ListaClientesComponent implements OnInit{

  clienteArray:any[] = [];
  clienteFiltro: any[] = [];
  nroDocumento:number = 0;

  constructor(private restService:RestService){}

  
  getListClientes() {
    this.restService.getClientes().subscribe((info: any) => {
      this.clienteArray = info;
      this.clienteFiltro = [...info]; 
    });
  }
  
  

  filtrarPersonas() {
    if (this.nroDocumento) {
      this.clienteFiltro = this.clienteArray.filter((persona) => {
        return persona.nro_doc && persona.nro_doc.toString().includes(this.nroDocumento.toString());
      });
    } else {
      this.clienteFiltro = [...this.clienteArray]; // Muestra todos los clientes si el campo de búsqueda está vacío
    }
  }
  
  


  ngOnInit(): void {
    this.getListClientes()  
  }


}
