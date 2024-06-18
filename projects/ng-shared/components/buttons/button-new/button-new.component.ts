import { Component, EventEmitter, Input, Output } from '@angular/core';
//import { RpbjBaseButtonComponent } from './index';
import { TOOLTIP_POSITION, VARIANTS } from '@ropabajo/shared/enum';
import { RpbjBaseButtonComponent } from '../button/base-button.component';

@Component({
  selector: 'rpbj-button-new',
  templateUrl: './button-new.component.html',
  standalone: true,
  imports: [RpbjBaseButtonComponent],
})
export class RpbjButtonNewComponent {
  variants = VARIANTS;
  tooltipPositionEnum = TOOLTIP_POSITION;

  @Input() variant: VARIANTS = this.variants.NORMAL;
  @Input() label?: string = 'Nuevo';
  @Input() disabled: boolean = false;
  @Output('on-click') onClickEvent: EventEmitter<any> = new EventEmitter();
  @Input() buttonType: string = 'button';

  @Input() icon?: string = 'plus';
  @Input() color?: string = 'primary';
  @Input() tooltip?: string = '';


  constructor() {}

  handleClick(e: any) {
    this.onClickEvent.emit(e);
  }
}
