import { FormGroup, ValidationErrors } from '@angular/forms';

export class FormUtils {

  // 1. Verifica si el campo tiene errores Y ha sido tocado
  static isValidField(form: FormGroup, fieldName: string): boolean | null {
    return !!form.controls[fieldName].errors && form.controls[fieldName].touched;
  }

  // 2. Obtiene el objeto de errores y llama a la función de texto
  static getFieldError(form: FormGroup, fieldName: string): string | null {
    if (!form.controls[fieldName]) return null;

    const errors = form.controls[fieldName].errors ?? {};
    return this.getTextError(errors);
  }

  // 3. Mapea el objeto de errores a un mensaje de texto
  static getTextError(errors: ValidationErrors): string | null {
    for (const key of Object.keys(errors)) {
      switch (key) {
        case 'required':
          return 'Este campo es requerido';
        case 'minlength':
          return `Mínimo de ${errors['minlength'].requiredLength} caracteres.`;
        case 'min':
          return `Valor mínimo de ${errors['min'].min}`;
        case 'email':
          return 'Formato de correo inválido';
      }
    }
    return null;
  }
}