import { ChangeDetectionStrategy, Component, signal, Signal } from '@angular/core';

@Component({
  selector: 'app-proyectos-page',
  imports: [],
  templateUrl: './proyectos-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProyectosPage {
changeName() {
throw new Error('Method not implemented.');
}

name = signal('');
description= signal('');

   proyectos = signal<Proyecto []>([

    {
      id: 1, nombre: 'Proyecto A',
      descripcion: 'descripcion'


    }



   ]

  )

}
