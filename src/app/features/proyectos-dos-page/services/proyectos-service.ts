import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  constructor() {
   }

   
  name = signal('');
  description = signal('');

 proyectos = signal<Proyecto[]>([
    { id: 1, nombre: 'Proyecto A', 
      descripcion: 'descripcion' }
  ]);
   

   changeName(value: string) {
    this.name.set(value);
  }

  changeDescription(value: string) {
    this.description.set(value);
  }


  addProyecto(newProyecto : Proyecto){

     this.proyectos.set([...this.proyectos(), newProyecto]);
  }



}
