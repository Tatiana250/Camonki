import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidationErrors, ValidatorFn, AsyncValidatorFn, AbstractControl } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.component.html',
  styleUrl: './registro-usuario.component.scss'
})
export class RegistroUsuarioComponent {

  constructor(private usuarioService: UsuarioService) {}

  userForm = new FormGroup({
    nombreUsuario: new FormControl(
      '', 
      Validators.required, 
      this.nombreUsuarioDisponibleValidator()
    ),
    mail: new FormControl('', Validators.email),
    contrasenia: new FormControl('', [Validators.required, Validators.minLength(7)]),
    confirmarContrasenia: new FormControl('', Validators.required),
    nombre: new FormControl('', Validators.required),
  }, { validators: this.passwordsIgualesValidator('contrasenia', 'confirmarContrasenia') });

  passwordsIgualesValidator(campo1: string, campo2: string): ValidatorFn {
    return (formGroup: AbstractControl): ValidationErrors | null => {
      const password = formGroup.get(campo1)?.value;
      const confirmarPassword = formGroup.get(campo2)?.value;

      return password === confirmarPassword ? null : { passwordsNoCoinciden: true };
    };
  }

  nombreUsuarioDisponibleValidator(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      if (!control.value) {
        return of(null);
      }
      return this.usuarioService.verificarNombreUsuarioDisponible(control.value).pipe(
        map(disponible => (disponible ? null : { nombreUsuarioNoDisponible: true })),
        catchError(() => of(null))
      );
    };
  }

}

