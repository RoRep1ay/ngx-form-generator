import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

export const addressModelForm = new FormGroup({
  firstName: new FormControl(null, [
    Validators.required,
    Validators.pattern(/^[a-zA-Z\'\s]+$/),
    Validators.minLength(1),
    Validators.maxLength(100)
  ]),
  school: new FormGroup({
    name: new FormControl(null, [
      Validators.pattern(/^[a-zA-Z\'\s]+$/),
      Validators.minLength(1),
      Validators.maxLength(100)
    ]),
    test: new FormControl(null, [
      Validators.minLength(1),
      Validators.maxLength(100)
    ])
  }),
  aliases: new FormArray([new FormGroup({
    name: new FormControl(null, [
      Validators.pattern(/^[a-zA-Z\'\s]+$/),
      Validators.minLength(1),
      Validators.maxLength(100)
    ]),
    test: new FormControl(null, [
      Validators.minLength(1),
      Validators.maxLength(100)
    ])
  })], []),
  lastName: new FormControl(null, [
    Validators.required,
    Validators.pattern(/^[a-zA-Z\'\s]+$/),
    Validators.minLength(1),
    Validators.maxLength(100)
  ]),
  address: new FormControl(null, [
    Validators.required,
    Validators.pattern(/^[\w\'\s]+$/),
    Validators.minLength(1),
    Validators.maxLength(100)
  ]),
  address2: new FormControl(null, [
    Validators.pattern(/^[\w\'\s]+$/),
    Validators.minLength(1),
    Validators.maxLength(100)
  ]),
  city: new FormControl(null, [
    Validators.required,
    Validators.pattern(/^[\w\'\s]+$/),
    Validators.minLength(1),
    Validators.maxLength(100)
  ]),
  postalCode: new FormControl(null, [
    Validators.required,
    Validators.pattern(/^[\w\s]+$/),
    Validators.minLength(4),
    Validators.maxLength(8)
  ]),
  emailAddress: new FormControl(null, [
    Validators.required,
    Validators.pattern(/^[\w\@\!\#\%\&\'\*\+\-\/\=\?\`\{\|\}\~\.]+$/),
    Validators.email
  ])
});
