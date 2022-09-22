import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-membresia',
  templateUrl: './membresia.component.html',
  styleUrls: ['./membresia.component.scss']
})
export class MembresiaComponent implements OnInit {
  selector: string[] = [
    'Después de un tiempo',
    'Quizás en cuanto conozca más',
    'Tan pronto esté disponible',
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
