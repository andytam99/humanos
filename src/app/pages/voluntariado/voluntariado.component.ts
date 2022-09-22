import { Component, OnInit } from '@angular/core';
import { CarSlide } from 'src/app/interfaces/carousel';
import { Servicios } from 'src/app/mocks/servicios';

@Component({
  selector: 'app-voluntariado',
  templateUrl: './voluntariado.component.html',
  styleUrls: ['./voluntariado.component.scss']
})
export class VoluntariadoComponent implements OnInit {
  slides: CarSlide[] = Servicios

  constructor() { }

  ngOnInit(): void {
  }

}
