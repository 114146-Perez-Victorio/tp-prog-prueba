import { Component } from '@angular/core';
import { RestService } from '../rest.service';
@Component({
  selector: 'app-crear-clientes',
  templateUrl: './crear-clientes.component.html',
  styleUrls: ['./crear-clientes.component.css']
})
export class CrearClientesComponent {
  cliente = {
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    id_tipo_doc: {
      id_tipo_doc: null,
      tipo_documento: '',
    },
    nro_doc: null,
    id_categoria_fiscal: {
      id_categoria: null,
      descripcion: '',
    },
    id_tipo_cliente: {
      id_tipo_cliente: null,
      tipo_cliente: '',
    },
    id_clasificacion: {
      id_clasificacion: null,
      descripcion: '',
    },
    cant_puntos: null,
  };

  monotributoBoolean:boolean = false;
  constructor(private restService:RestService) {}

  monotributo(){
    return this.monotributoBoolean = true;
  }
  
  crearCliente() {
    // Envía los datos del cliente al servidor
    this.restService.postCliente(this.cliente).subscribe((response) => {
      // Maneja la respuesta del servidor, por ejemplo, muestra un mensaje de éxito
      console.log('Cliente creado con éxito', response);
      // Limpia el formulario o realiza otras acciones necesarias
      this.cliente = {
        nombre: '',
        apellido: '',
        email: '',
        telefono: '',
        id_tipo_doc: {
          id_tipo_doc: null,
          tipo_documento: '',
        },
        nro_doc: null,
        id_categoria_fiscal: {
          id_categoria: null,
          descripcion: '',
        },
        id_tipo_cliente: {
          id_tipo_cliente: null,
          tipo_cliente: '',
        },
        id_clasificacion: {
          id_clasificacion: null,
          descripcion: '',
        },
        cant_puntos: null,
      };
    });
    console.log(this.cliente);
    
  }
}
