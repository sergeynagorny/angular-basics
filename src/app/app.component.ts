import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
      ]),
      address: new FormGroup({
        country: new FormControl('by'),
        city: new FormControl('', Validators.required),
      }),
    });
  }

  submit() {
    console.log('Form submitted: ', this.form);
    console.log('Form data: ', { ...this.form.value });
  }

  setCapital() {
    type TCityKey = 'ru' | 'ua' | 'by';
    const cityMap = {
      ru: 'Moscow',
      ua: 'Kiev',
      by: 'Minsk',
    };

    const cityKey: TCityKey = this.form.get('address')?.get('country')?.value;

    const currentCity = cityMap[cityKey];

    this.form.patchValue({
      address: { city: currentCity },
    });
  }
}
