import { Routes } from '@angular/router';
import { Formulario } from './pages/FormularioPage/formulario';
import { FormulariosDinamicos } from './pages/formularios-dinamicos/formularios-dinamicos';

export const formulariosRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'basic',
        title: 'Formularios Básicos',
        component: Formulario,
      },
      {
        path: 'dynamic',
        title: 'Formularios Dinámicos',
        component: FormulariosDinamicos,
      },
      /*
      {
        path: 'more',
        title: 'More',
        component: MoreFormsPage,
      },*/

      {
        path: '**',
        redirectTo: 'basic',
      },
    ],
  },
];