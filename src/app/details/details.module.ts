import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DetailsComponent } from './details.component';
import { routes } from './details.router';

import { CardModule } from '../../card';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CardModule
  ],
  declarations: [ DetailsComponent ]
})
export class DetailsModule {}