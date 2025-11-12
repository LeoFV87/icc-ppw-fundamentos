import { effect, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  constructor() {

     effect(() =>{

       const data= this.proyectos();
       console.log(data);
       console.log(JSON.stringify(data))
       localStorage.setItem(this.STORAGE_KEY, JSON.stringify(data));


     });

  }

   private readonly STORAGE_KEY ='proyectosApp';

   proyectos = signal<Proyecto[]>(this.loadProyectos());

   private loadProyectos(): Proyecto [] {

    const data = localStorage.getItem(this.STORAGE_KEY);
       
    return data ? JSON.parse(data) : [
     { id: 1, nombre: 'Proyecto A', 
      descripcion: 'descripcion' }
       ]
   }


 // name = signal('');
 // description = signal('');

 //  changeName(value: string) {
  //  this.name.set(value);
 // }

  //changeDescription(value: string) {
   // this.description.set(value);
  //}

  addProyecto(newProyecto : Proyecto){
     this.proyectos.set([...this.proyectos(), newProyecto]);
  }

  
   delFirstProyecto() {
       this.proyectos.set(this.proyectos().slice(1));
   }
  


}
