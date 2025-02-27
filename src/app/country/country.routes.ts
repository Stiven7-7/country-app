import { ByCountryComponent } from './pages/by-country/by-country.component';
import { Routes } from '@angular/router';
import { CountryLayoutComponent } from './layouts/CountryLayout/CountryLayout.component';
import { ByCapitalPageComponent } from './pages/by-capital-page/by-capital-page.component';
import { ByRegionComponent } from './pages/byRegion/byRegion.component';
import { CountryPageComponent } from './pages/countryPage/countryPage.component';

export const contryRoutes: Routes = [
  {
    path: '',
    component: CountryLayoutComponent,
    children: [
      {
        path: 'by-capital',
        component: ByCapitalPageComponent,
      },
      {
        path: 'by-country',
        component: ByCountryComponent,
      },
      {
        path: 'by-region',
        component: ByRegionComponent,
      },
      {
        path: 'by/:code',
        component: CountryPageComponent,
      },
      {
        path: '**',
        redirectTo: 'by-capital',
      }
    ]
  },
  // {
  //   path: 'country',
  // },

];

export default contryRoutes;
