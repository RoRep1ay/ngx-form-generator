import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

export const addressModelForm = new FormGroup({
  foo: new FormArray([new FormControl(null, [])]),
  bars: new FormArray([
    new FormGroup({
      field1: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^[a-zA-Z\'\s]+$/),
        Validators.minLength(1),
        Validators.maxLength(100)
      ]),
      field2: new FormControl(null, [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(100)
      ])
    })
  ])
});
