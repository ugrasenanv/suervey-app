import {ContentChild, Directive, Input, OnInit} from '@angular/core';
import {CellCallback} from './types';
import {DataTableRow} from './row.component';

@Directive({
  selector: '[appTableColumn]'
})
export class TableColumnDirective {

  constructor() { }

}