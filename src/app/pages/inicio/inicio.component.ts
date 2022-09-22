import { Component, OnInit } from '@angular/core';
import { CarSlide } from 'src/app/interfaces/carousel';
import { Experiencias } from 'src/app/mocks/experiencias';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss'],
})
export class InicioComponent implements OnInit {
  slides: CarSlide[] = Experiencias;

  selector: string[] = [
    'Después de un tiempo',
    'Quizás en cuanto conozca más',
    'Tan pronto esté disponible',
  ];

  constructor() {}

  ngOnInit(): void {
  }
}
