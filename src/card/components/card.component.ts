import { Component, Input } from '@angular/core';

import { Person } from '../entities';

@Component({
  selector: 'my-card',
  templateUrl: './card.component.html'
})
export class MyCardComponent {
  @Input()
  public person: Person
}