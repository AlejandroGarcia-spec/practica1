import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'dashboard',
        loadComponent:()=> import ('./dashboard/dashboardChido/dasboardchido.component'),
        children:[
            {
                path:'control-flow',
                loadComponent:()=> import('./dashboard/pages/control-flow/control-flow.component'),
            },
            {
                path:'defer-options',
                loadComponent:()=> import('./dashboard/pages/defer-options/defer-options.component'),
            },
            {
                path:'', redirectTo:'control-flow', pathMatch:'full'
            }
        ]
    },
    {
        path:'', redirectTo:'dashboard', pathMatch:'full'
    }
];
