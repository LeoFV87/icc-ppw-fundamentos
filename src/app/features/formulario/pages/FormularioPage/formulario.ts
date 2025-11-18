import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormUtils } from '../../form-utils';

@Component({
  selector: 'app-formulario',
  imports: [ReactiveFormsModule],
  templateUrl: './formulario.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Formulario {

    formUtils = FormUtils;

        private fb= inject(FormBuilder);

        myForm: FormGroup = this.fb.group ({
          nombre: ['', [Validators.required, Validators.minLength(3)]],
          edad:  [0, [Validators.required, Validators.min(18)]],
          correo: ['', [Validators.required, Validators.email]]
        
        });

/*
onSubmit() {
   if(this.myForm.invalid){
    this.myForm.markAllAsTouched();
    return;
   }

}
*/

 onSubmit() {
      if(this.myForm.invalid){
        this.myForm.markAllAsTouched();
        return;
      }
      console.log('Formulario válido:', this.myForm.value);
    } 


 }

