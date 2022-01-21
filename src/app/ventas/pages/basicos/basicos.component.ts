import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  nombreLower: string = 'Carlos';
  nombreUpper: string = 'CARLOS';
  nombreCompleto: string = 'CaRlOs PoZo'

  // Hoy
  fecha: Date = new Date();


}
