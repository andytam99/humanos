import { Component, Input, AfterViewInit } from '@angular/core';

import {
  FormControl,
  FormGroup,
  FormGroupDirective,
  Validators,
} from '@angular/forms';
import { FormService } from 'src/app/services/form/form.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements AfterViewInit {
  @Input() selector: string[] = [];
  private selectorPattern: RegExp | string = '';

  formGroup = new FormGroup({
    nombre: new FormControl(null, {
      validators: [Validators.required, Validators.maxLength(25)],
    }),
    apellido: new FormControl(null, {
      validators: [Validators.required, Validators.maxLength(25)],
    }),
    numero: new FormControl(null, {
      validators: [Validators.pattern('([^a-z-.][0-9])*')],
    }),
    correo: new FormControl(null, {
      validators: [Validators.required, Validators.email],
    }),
    selected: new FormControl(null, [Validators.required]),
    terminos: new FormControl(false, [
      Validators.required,
      Validators.pattern(/true/gi),
    ]),
  });

  onSubmit(form: FormGroupDirective) {
    console.log(this.formGroup, this.selectorPattern);
    this.formService.sendform(this.formGroup.value, 'miembro');
    form.reset();
  }

  constructor(private formService: FormService) {}

  ngAfterViewInit(): void {
    this.selectorPattern = new RegExp(this.selector.join('|'), 'gi');
    this.formGroup.controls.selected.addValidators(
      Validators.pattern(this.selectorPattern)
    );
  }
}
