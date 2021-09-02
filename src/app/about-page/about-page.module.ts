import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { AboutPageRoutingModule } from './about-page-routing.module';

import { AboutPageComponent } from './about-page.component';
import { AboutExtraPageComponent } from './about-extra-page/about-extra-page.component';

@NgModule({
  declarations: [AboutPageComponent, AboutExtraPageComponent],
  imports: [CommonModule, SharedModule, AboutPageRoutingModule],
})
export class AboutPageModule {}
