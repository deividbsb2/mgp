import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './pages/tabs/tabs.module#TabsPageModule' },
  { path: 'home', redirectTo: '/pages/tabs/(home:home)' },
  { path: 'share', loadChildren: './pages/share/share.module#SharePageModule' },
  { path: 'filter', loadChildren: './pages/filter/filter.module#FilterPageModule' },
  { path: 'barcode', loadChildren: './pages/barcode/barcode.module#BarcodePageModule' },
  { path: 'person', loadChildren: './pages/person/person.module#PersonPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
