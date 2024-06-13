import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IDataGridButton } from '@ropabajo/shared/interfaces';
import { VARIANTS } from '@ropabajo/shared/enum';
import { RpbjBaseButtonComponent } from '../../buttons';

@Component({
  selector: 'rpbj-data-grid-buttons',
  templateUrl: './data-grid-buttons.component.html',
  standalone: true,
  imports: [CommonModule, RpbjBaseButtonComponent],
})
export class DataGridButtonsComponent {
  @Input() rowIndex!: number;
  @Input() item: any;
  @Input() disabled!: boolean;

  @Input() buttons?: IDataGridButton[] = [];

  @Input() editableOptions: any = null;
  @Output('on-click-button') onClickButtonEvent: EventEmitter<any> =
    new EventEmitter();
  @Input() addEditableButtons!: boolean;
  @Output('on-save') onSaveEvent: EventEmitter<any> = new EventEmitter();
  @Output('on-edit') onEditEvent: EventEmitter<any> = new EventEmitter();
  @Output('on-discard') onDiscardEvent: EventEmitter<any> = new EventEmitter();
  variants = VARIANTS;

  constructor() {}

  handleClickButton = (button: IDataGridButton, e: any) => {
    this.onClickButtonEvent.emit({ action: button.action, event: e });
  };

  handleClickSave = () => {
    this.onSaveEvent.emit();
  };

  handleClickEdit = () => {
    this.onEditEvent.emit();
  };

  handleClickDiscard = () => {
    this.onDiscardEvent.emit();
  };
}
