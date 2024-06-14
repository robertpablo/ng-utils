import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IDataGridColumnDefinition } from '@ropabajo/shared/interfaces';

@Component({
  selector: 'rpbj-data-grid-column-head',
  templateUrl: './data-grid-column-head.component.html',
  styleUrls: ['./data-grid-column-head.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class RpbjDataGridHeadColumnComponent {
  @Input() orderField: string = '';
  @Input() orderDir: string = '';
  @Input() colDef: IDataGridColumnDefinition = { field: '' };
  @Output('on-sort') onSortEvent: EventEmitter<any> = new EventEmitter();
  @Input() disabled: boolean = false;
  @Input() template: any;

  hover: boolean = false;

  constructor() {}

  handleClickSort = () => {
    if (this.disabled) return;
    this.orderDir =
      this.orderField == this.colDef.field
        ? this.orderDir == 'asc'
          ? 'desc'
          : 'asc'
        : 'asc';
    const event = { direction: this.orderDir, active: this.colDef.field };
    this.onSortEvent.emit(event);
  };
}
