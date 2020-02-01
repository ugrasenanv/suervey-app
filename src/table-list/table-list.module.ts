import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { MyActiveDirective, MyTableComponent } from './components';
import { TableContainerComponent } from './containers';
import { reducers } from './reducers';
import { TableEffectsService } from './effects';

const components = [
  MyActiveDirective,
  MyTableComponent,
  TableContainerComponent
];

const effects = [ TableEffectsService ];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    StoreModule.forFeature('tableState',reducers),
    EffectsModule.forFeature(effects)
  ],
  declarations: [...components],
  exports: [...components]
})
export class TableListModule {}