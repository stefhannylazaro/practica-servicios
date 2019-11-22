import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from '../app/components/home/home.component';
import {C404Component} from '../app/components/c404/c404.component';

const appRoutes:Routes=[
    {path:'',component:HomeComponent},
    {path:'home',component:HomeComponent},
    {path:'**',component:C404Component}
];

export const appRoutingProviders:any[] = [];
export const routing:ModuleWithProviders=RouterModule.forRoot(appRoutes);