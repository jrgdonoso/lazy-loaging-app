import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-donde-estamos',
  templateUrl: './donde-estamos.component.html',
  styleUrls: ['./donde-estamos.component.css']
})
export class DondeEstamosComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    console.log('Se cargo el componente donde estamos');

  }

}
