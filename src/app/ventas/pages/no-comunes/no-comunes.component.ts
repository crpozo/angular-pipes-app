import { Component } from '@angular/core';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  // i18nSelect
  nombre: string = 'carlos';
  genero: string = 'masculino';

  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  // i18nPlural
  clientes: string[] = [
    'Maria',
    'Pedros',
    'Juan'
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

}
