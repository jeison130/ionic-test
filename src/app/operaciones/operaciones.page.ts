import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operaciones',
  templateUrl: './operaciones.page.html',
  styleUrls: ['./operaciones.page.scss'],
})
export class OperacionesPage implements OnInit {
  num1: number
  op: string
  num2: number
  message: string

  constructor() { }

  ngOnInit() {
  }

  operacion() {
    this.message = 'El resultado de la suma entre 1 y 2 es 3'
  }

}
