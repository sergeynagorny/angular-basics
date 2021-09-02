import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AboutPageComponent } from './about-page.component';
import { AboutExtraPageComponent } from './about-extra-page/about-extra-page.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'about',
        component: AboutPageComponent,
        children: [{ path: 'extra', component: AboutExtraPageComponent }],
      },
    ]),
  ],
  exports: [RouterModule],
})
export class AboutPageRoutingModule {}
