import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuario';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const URL = 'https://685034f2e7c42cfd1797d7a0.mockapi.io/api/camonkii/users';

@Injectable({
  providedIn: 'root'
})

export class UserDataService { //realiza conexion y obtiene datos de la api de usuarios


  constructor(private http : HttpClient) { }

  getAll() : Observable<Usuario[]>{
    return this.http.get<Usuario[]>(URL); 
  }

  create(user: any): Observable<any> {
    return this.http.post(URL, user); //lo envio al api
  }




}
