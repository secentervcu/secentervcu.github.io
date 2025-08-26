import {Routes} from '@angular/router';
import {Research} from './research/research';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'research',
    pathMatch: 'full'
  },
  {
    path: 'research',
    component: Research
  }
];
