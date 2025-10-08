import {Routes} from '@angular/router';
import {Research} from './research/research';

export const routes: Routes = [
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: '',
    component: Research
  }
];
