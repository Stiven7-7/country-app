import { Routes } from '@angular/router';
import { ByCapitalPageComponent } from './pages/by-capital-page/by-capital-page.component';

export const contryRoutes: Routes = [
  {
    path: '',
    component: ByCapitalPageComponent,
  },
  // {
  //   path: 'country',
  // },
  {
    path: '**',
    redirectTo: '',
  }
];

export default contryRoutes;
