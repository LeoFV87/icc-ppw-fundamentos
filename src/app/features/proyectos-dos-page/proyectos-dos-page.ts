import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ProyectosService } from './services/proyectos-service';
import { ListadoProyectos } from "../proyectos-page/components/listado-proyectos/listado-proyectos";
import { AddProyecto } from "../proyectos-page/components/add-proyecto/add-proyecto";

@Component({
  selector: 'app-proyectos-dos-page',
  imports: [ListadoProyectos, AddProyecto],
  templateUrl: './proyectos-dos-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProyectosDosPage { 



   proyectosService =inject(ProyectosService);




}
