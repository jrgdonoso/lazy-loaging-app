import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conocenos',
  templateUrl: './conocenos.component.html',
  styleUrls: ['./conocenos.component.css']
})
export class ConocenosComponent implements OnInit {

  constructor() { }
  
  ngOnInit() {

    console.log('Se cargo el componente conocenos');

  }

}
