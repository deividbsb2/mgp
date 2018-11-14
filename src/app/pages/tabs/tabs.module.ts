import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs.router.module';

import { TabsPage } from './tabs.page';
import { HomePageModule } from '../home/home.module';
import { FilterPageModule } from '../filter/filter.module';
import { PersonPageModule } from '../person/person.module';
import { BarcodePageModule } from '../barcode/barcode.module';
import { SharePageModule } from '../share/share.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    HomePageModule,
    FilterPageModule,
    PersonPageModule,
    BarcodePageModule,
    SharePageModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
