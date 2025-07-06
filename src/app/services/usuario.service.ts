import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { UserDataService } from './user-data.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  constructor(private datApi: UserDataService ) {}

  verificarNombreUsuarioDisponible(nombre: string): Observable<boolean> {
    return this.datApi.getAll().pipe(
      map(usuario => !usuario.some(u => u.nombreUsuario === nombre))
    );
  }
}

