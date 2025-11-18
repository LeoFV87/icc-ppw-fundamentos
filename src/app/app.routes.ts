import { Routes } from '@angular/router';
import { HomePage } from './features/homePage/homePage';
import { PerfilPage } from './features/PerfilPage/PerfilPage';
import { ProyectosPage } from './features/proyectos-page/proyectos-page';
import { ProyectosDosPage } from './features/proyectos-dos-page/proyectos-dos-page';
import { Formulario } from './features/formulario/pages/FormularioPage/formulario';

export const routes: Routes = [


    {

        path: "",
        component: HomePage

    },

    {


        path: 'perfil',
        component: PerfilPage
    },

    {

        path: 'proyectos',
        component: ProyectosPage

    },

    {


        path: 'proyectosDos',
        component: ProyectosDosPage
        
    },
  
    {

       path: 'formulario', 

       loadChildren: () =>
        import('./features/formulario/formularios-routes').then(
            (m) => m.formulariosRoutes
        ),
        
    }

];
