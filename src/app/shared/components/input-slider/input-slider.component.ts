import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-input-slider',
  templateUrl: './input-slider.component.html',
  styleUrls: ['./input-slider.component.scss'],
})
export class InputSliderComponent {
  name = 'Ng Custom Slider';
  inputForm: FormGroup;

  constructor() {
    this.inputForm = new FormGroup({
      rentPrice: new FormControl('3000'),
    });

    // setInterval(() => {
    //   this.inputForm.get('price').setValue(100);
    // },5000);
  }

  output(e: any) {
    console.log(e.target.value);
  }
}
