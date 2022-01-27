import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  // i18nSelect Pipe
  nombre: string = 'carlos';
  genero: string = 'masculino';

  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  // i18nPlural Pipe
  clientes: string[] = [
    'Maria',
    'Pedro',
    'Juan',
    'Eduardo',
    'Paola'
  ]

  clientesMapa = {
    '=0' : 'no tenemos ningún cliente esperando.',
    '=1' : 'tenemos un cliente esperando.',
    'other' : 'tenemos # clientes esperando.'
  }

  cambiarCliente() {
    if(this.genero == 'masculino'){
      this.genero = 'femenino';
      return;
    }
    if(this.genero == 'femenino'){
      this.genero = 'masculino';
      return;
    }
  }

  borrarCliente() {
    this.clientes.pop();
  }

  // KeyValue Pipe

  persona = {
    nombre: 'Carlos',
    edad: 27,
    direccion: 'Leipzig, Alemania'
  }

  // Json Pipe
  heroes = [
    {
      nombre: 'Superman',
      volar: true
    },
    {
      nombre: 'Robin',
      volar: false
    },
    {
      nombre: 'Aquaman',
      volar: false
    }
  ]

  // Async pipe
  miObservable = interval(1000);

  valorPromesa = new Promise( (resolve, reject) => {
    setTimeout( () => {
      resolve('Tenemos data de promesa')
    }, 3500);
  });


}
