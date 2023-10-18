import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class RestService {
  
  private urlApi = "https://my-json-server.typicode.com/113974-Olivera-Gustavo/api-clients-bd/clientes"

  constructor(private httpClient:HttpClient) {}

  public getClientes():Observable<any[]>{
    return this.httpClient.get<any[]>(this.urlApi)
  }

  public postCliente(cliente: any):Observable<any> {
    return this.httpClient.post(this.urlApi, cliente); 
  }

}
