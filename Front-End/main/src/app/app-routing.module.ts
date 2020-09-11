import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FullComponent } from './layouts/full/full.component';
export const routes: Routes = [
{
    path: '',
    component: FullComponent,
    children: [
        { path: '', redirectTo: '/dashboard/dashboard1', pathMatch: 'full' },
        { path: 'dashboard', loadChildren: () => import('./dashboards/dashboard.module').then(m => m.DashboardModule) },
        { path: 'starter', loadChildren: () => import('./starter/starter.module').then(m => m.StarterModule) },
        { path: 'charts', loadChildren: () => import('./charts/charts.module').then(m => m.ChartModule) },
        { path: 'group', loadChildren: () => import('./issumanager/group-manager/group-manager.module').then(m => m.GroupManagerModule) },
        // tslint:disable-next-line: max-line-length
        { path: 'category', loadChildren: () => import('./category-mananager/category-mananager.module').then(m => m.CategoryMananagerModule) },
    ]
},
{
    path: '**',
    redirectTo: '404'
}];

@NgModule({
    imports: [RouterModule.forRoot(routes), NgbModule.forRoot()],
    exports: [RouterModule]
})
export class AppRoutingModule { }

