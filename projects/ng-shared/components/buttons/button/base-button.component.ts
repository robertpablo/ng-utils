import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TOOLTIP_POSITION, VARIANTS } from 'projects/ng-shared/enum';

@Component({
  selector: 'rpbj-base-button',
  templateUrl: './base-button.component.html',
  standalone: true,
})
export class RpbjBaseButtonComponent implements OnInit {
  @Input() propTitle?: string = '';
  @Input() styleClass?: string = '';

  variants = VARIANTS;
  tooltipPositionEnum = TOOLTIP_POSITION;

  @Input() variant: VARIANTS = this.variants.NORMAL;
  @Input() label?: string = '';
  @Input() buttonType: string = 'button';
  @Input() icon?: string;
  @Input() color?: string = 'primary';
  @Input() tooltip?: string = '';
  @Input() tooltipPosition: string = this.tooltipPositionEnum.ABOVE;
  @Input() disabled: boolean = false;
  @Output('on-click') onClickEvent: EventEmitter<any> = new EventEmitter();
  @Input() fullWidth: boolean = false;

  buttonClass: any;

  constructor() {}

  ngOnInit() {
    this.buttonClass = {};
    if (this.styleClass) {
      this.buttonClass[this.styleClass] = true;
    }
  }

  handleClick(e: any) {
    if (this.disabled) return false;
    this.onClickEvent.emit(e);
  }
}
