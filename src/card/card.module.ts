import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyCardComponent } from './components';
import { CardContainerComponent } from './containers';

const components = [MyCardComponent, CardContainerComponent];

@NgModule({
  imports: [ CommonModule ],
  declarations: [...components],
  exports: [...components]
})
export class CardModule {}