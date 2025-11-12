import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input, signal } from '@angular/core';

@Component({
  selector: 'listado-proyectos',
  imports: [CommonModule],
  templateUrl: './listado-proyectos.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class ListadoProyectos { 


   listName = input.required<string>();

   proyectos = input.required<Proyecto[]>();


}
