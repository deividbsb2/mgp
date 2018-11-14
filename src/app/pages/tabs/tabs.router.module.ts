import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabsPage } from './tabs.page';
import { HomePage } from '../home/home.page';
import { SharePage } from '../share/share.page';
import { FilterPage } from '../filter/filter.page';
import { BarcodePage } from '../barcode/barcode.page';
import { PersonPage } from '../person/person.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        outlet: 'home',
        component: HomePage
      },
      {
        path: 'filter',
        outlet: 'filter',
        component: FilterPage
      },
      {
        path: 'barcode',
        outlet: 'barcode',
        component: BarcodePage
      },
      {
        path: 'person',
        outlet: 'person',
        component: PersonPage
      },
      {
        path: 'share',
        outlet: 'share',
        component: SharePage
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/(home:home)',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
