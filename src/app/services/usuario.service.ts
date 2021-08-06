import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  listUsuarios: Usuario[] = [
    {usuario: "jfMontillo", nombre: 'Federico', apellido: "Montillo", sexo: 'Masculino'},
    {usuario: "Kaaren", nombre: 'Karen', apellido: "Espinoza", sexo: 'Femenino'},
    {usuario: "p_pedro", nombre: 'Pedro', apellido: "Alfonso", sexo: 'Masculino'},
    {usuario: "carlos123", nombre: 'Carlos', apellido: "Gomez", sexo: 'Masculino'},
    {usuario: "carolina1", nombre: 'Carolina', apellido: "Garcia", sexo: 'Femenino'},
    {usuario: "hugo43", nombre: 'Hugo', apellido: "Boss", sexo: 'Masculino'},
  ];

  constructor() { }

  getUsuarios() {
    return this.listUsuarios.slice();
  }

  eliminarUsuario(index: number) {
    this.listUsuarios.splice(index, 1);
  }

  agregarUsuario(usuario: Usuario) {
    this.listUsuarios.unshift(usuario);
  }
}
