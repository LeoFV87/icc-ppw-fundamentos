import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-perfil-page',
  imports: [],
  templateUrl: './PerfilPage.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PerfilPage { 

  name = signal('Leo');
  lastName = signal('Vasconez');
  age = signal(20);

  //Metodo que devuelve el nombre entero con la edad
  getFullName(): string {
    return `${this.name()} ${this.lastName()} con edad ${this.age()} años`;
  }

  //Metodo que sirve para cambiar datos que no recibe parametros
  changeData(): void {
    this.name.set('Ana');
    this.lastName.set('Gonzales');
    this.age.set(25);
  }

  //Metodo que cambia la edad a 18
  changeAge(): void {
    this.age.set(18);
  }

  resetData(): void {
    this.name.set('Leo');
    this.lastName.set('Vasconez');
    this.age.set(20);
  }




}