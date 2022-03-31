import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  greeting = 'Hola a todos'
  image = 'https://www.adslzone.net/app/uploads-adslzone.net/2019/04/borrar-fondo-imagen.jpg'

  inputText = 'este es un input'

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    alert('Esto es un Click')
  }

}
