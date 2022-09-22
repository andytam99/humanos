import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss'],
})
export class InicioComponent implements OnInit {
  selector: string[] = [
    'Después de un tiempo',
    'Quizás en cuanto conozca más',
    'Tan pronto esté disponible',
  ];

  constructor() {}

  ngOnInit(): void {
  }
}
