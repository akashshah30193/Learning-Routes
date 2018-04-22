import {Router, RouterModule} from '@angular/router';
import { CircularComponent } from './circular/circular.component';
import { PersonalFormComponent } from './personal-form/personal-form.component';
import { Routes } from '@angular/router/src/config';
import { SubmitFormComponent } from './submit-form/submit-form.component';

export const appRoutes: Routes = [
    {path: '', redirectTo: 'circular', pathMatch: 'full'},
    {
        path: 'circular', component: CircularComponent,
        // children: [
        //     {path: '', redirectTo: 'guess', pathMatch: 'full'},
        //     {
        //         path: 'guess', component: PersonalFormComponent
        //     }
        // ]
    },
    {path: 'guess', component: PersonalFormComponent},
    {path: 'submitted', component: SubmitFormComponent},
    {path: '**', redirectTo: ''}
];

export const routing = RouterModule.forRoot(appRoutes);

