import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';
import { auth2Guard } from './guards/auth2.guard';

export const routes: Routes = [
    {
        path:'dashboard',
        loadComponent:()=> import ('./dashboard/dashboardChido/dasboardchido.component'),
        children:[
            {
                path:'control-flow',
                loadComponent:()=> import('./dashboard/pages/control-flow/control-flow.component'),
                canActivate:[authGuard]
                
            },
            {
                path:'defer-options',
                loadComponent:()=> import('./dashboard/pages/defer-options/defer-options.component'),
            },
            {
                path:'reactive-forms',
                loadComponent:()=> import('./dashboard/pages/reactiveForms/reactiveForms.component'),
                canActivate:[auth2Guard]
            },
            {
                path:'exam',
                loadComponent:()=> import('./dashboard/pages/examen1p/examen1p.component'),
            },
            {
                path:'array',
                loadComponent:()=> import('./dashboard/pages/arrayForm/arrayForm.component'),
            },
            {
                path:'examen',
                loadComponent:()=> import('./dashboard/pages/examen2/examen2.component'),
            },
            {
                path:'pipes',
                loadComponent:()=> import('./dashboard/pages/pipes/pipes.component'),
            },
            {
                path:'product',
                loadComponent:()=> import('./dashboard/pages/products/products.component'),
            },
            {
                path:'login',
                loadComponent:()=> import('./dashboard/pages/login/login.component'),
                canActivate:[auth2Guard]
                
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
