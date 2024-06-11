import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  IDataGridButtonEvent,
  IDataGridColumnDefinition,
} from 'projects/ng-shared/interfaces';
import { DataGridButtonsComponent } from '../data-grid-buttons/data-grid-buttons.component';
import { CommonModule } from '@angular/common';
import { SharedPipesModule } from 'projects/ng-shared/pipe';

enum EnumColumnType {
  TEXT = 'TEXT',
  DATETIME = 'DATETIME',
  BUTTON = 'BUTTON',
  CUSTOM_TEMPLATE = 'CUSTOM-TEMPLATE',
}

@Component({
  selector: 'rpbj-data-grid-column-body',
  templateUrl: './data-grid-column-body.component.html',
  standalone: true,
  imports: [DataGridButtonsComponent, CommonModule, SharedPipesModule],
})
export class RpbjDataGridBodyColumnComponent implements OnInit {
  enumColumnType = EnumColumnType;
  @Input() colDef!: IDataGridColumnDefinition;
  @Input() element: any;
  @Input() template: any;
  @Input() rowIndex!: number;
  @Input() loading: boolean = false;
  @Input() isLastColumn: boolean = false;
  @Input() isEditableGrid: boolean = false;
  @Input() editableOptions: any;
  @Output('on-click-button')
  onClickButtonEvent: EventEmitter<IDataGridButtonEvent> = new EventEmitter();
  @Output('on-edit') onEditEvent: EventEmitter<any> = new EventEmitter();
  @Input() expanded!: boolean;
  @Input() openExpandable!: () => void;
  @Input() closeExpandable!: () => void;

  datetimeDefaultFormat: string = 'DD/MM/YYYY HH:mm:ss';
  columnType!: EnumColumnType;

  constructor() {}

  ngOnInit() {
    this.setColumnType();
  }

  getProperty = (obj: any, path: any) => {
    return path.split(/(\[|\]|\.)/).reduce((x: any, y: any) => {
      return '[].'.indexOf(y) > -1
        ? x
        : x === Object(x) && y in x
        ? x[y]
        : undefined;
    }, obj);
  };

  setColumnType = () => {
    if (this.colDef.template) {
      this.columnType = this.enumColumnType.CUSTOM_TEMPLATE;
    } else if (this.colDef.buttons) {
      this.columnType = this.enumColumnType.BUTTON;
    } else if (this.colDef.isDatetime) {
      this.columnType = this.enumColumnType.DATETIME;
    } else {
      this.columnType = this.enumColumnType.TEXT;
    }
  };

  handleClickButton = (event: any, item: any, index: any) => {
    event.event.stopPropagation();
    this.onClickButtonEvent.emit({ item, action: event.action, index });
  };

  handleClickEdit = () => {
    this.onEditEvent.emit();
  };
}
