import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-valores',
  templateUrl: './valores.component.html',
  styleUrls: ['./valores.component.scss']
})
export class ValoresComponent implements OnInit {
  selector: string[] = [
    'Después de un tiempo',
    'Quizás en cuanto conozca más',
    'Tan pronto esté disponible',
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
