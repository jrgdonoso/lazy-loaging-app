import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nuestra-historia',
  templateUrl: './nuestra-historia.component.html',
  styleUrls: ['./nuestra-historia.component.css']
})
export class NuestraHistoriaComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    console.log('Se cargo el componente nuestra historia');
  }

}
