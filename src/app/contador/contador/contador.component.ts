import { Component } from '@angular/core';


@Component({
    selector: 'app-contador',
    template: `
        <h1>{{ titulo }}</h1>
        <h3>La base es: <strong> {{base}} </strong></h3>
        <button (click)="acumular(base)">+{{ base }}</button>
        <span>{{ numero }}</span>
        <button (click)="acumular(-base)">-{{ base }}</button>
        <button (click)="reiniciar()">Reiniciar</button>
    `
})
export class ContadorComponent{
    titulo: string = 'Contador App';
    numero: number = 10;
    base  : number = 25;
    acumular( valor: number ):void{
      this.numero += valor;
    }
    reiniciar(){
      this.numero = 10;
    }
    
}