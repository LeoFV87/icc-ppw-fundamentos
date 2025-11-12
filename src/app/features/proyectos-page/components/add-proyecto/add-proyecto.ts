import { ChangeDetectionStrategy, Component, EventEmitter, Output, output, signal } from '@angular/core';

@Component({
  selector: 'add-proyecto',
  imports: [],
  templateUrl: './add-proyecto.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddProyecto { 


  name = signal('');
  description = signal('');

    newProyecto = output<Proyecto>();
    @Output() removeProyecto = new EventEmitter<void>();

   addProyecto() {

    const newProyecto: Proyecto = {
      id: Math.floor(Math.random() *1000) ,
      nombre: this.name(),
      descripcion: this.description()
    };
       
      this.newProyecto.emit(newProyecto),
      this.name.set(''),
      this.description.set('')
   
  }

   changeName(value: string) {
    this.name.set(value);
  }

  changeDescription(value: string) {
    this.description.set(value);
  }

  delFirstProyecto() {
    this.removeProyecto.emit(); 
  }



}
