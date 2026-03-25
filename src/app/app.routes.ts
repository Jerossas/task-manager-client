import { Routes } from '@angular/router';
import { SignUp } from './auth/sign-up/sign-up';

export const routes: Routes = [
    {
        path: 'sign-up',
        component: SignUp
    },
    {
        path: '',
        redirectTo: 'sign-up',
        pathMatch: 'full'
    }
];
