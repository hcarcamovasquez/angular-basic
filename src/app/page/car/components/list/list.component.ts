import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'car-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  greeting = 'Hola a todos'
  image = 'https://www.adslzone.net/app/uploads-adslzone.net/2019/04/borrar-fondo-imagen.jpg'

  inputText = 'este es un input'

  name: string

  constructor() {

    this.name = 'dwdw'
  }

  ngOnInit(): void {

  }

  onClick(){
    alert('Esto es un Click')
  }

}
