import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'parameter-field',
  templateUrl: './parameter-field.component.html',
  styleUrls: ['./parameter-field.component.scss'],
})
export class ParameterFieldComponent implements OnInit {
  @Input() label: string;
  @Input() parameter: string;
  constructor() {}

  ngOnInit(): void {}
}
