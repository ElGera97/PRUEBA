import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  // Se crea el contructor que conecta a nuestro JSON
  constructor(private http: HttpClient) {}

  // Se instancia any para pasar el body al JSON
  postMarcas(data: any) {
    return this.http.post<any>('http://localhost:3000/marcas', data);
  }

  postModelo(data: any) {
    return this.http.post<any>('http://localhost:3000/modelos', data);
  }

  getMarca() {
    return this.http.get<any>('http://localhost:3000/marcas');
  }

  getModelo() {
    return this.http.get<any>('http://localhost:3000/modelos');
  }
}
