import { CommonModule } from '@angular/common';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { VARIANTS, TOOLTIP_POSITION, ISize } from '@ropabajo/shared/enum';

@Component({
  selector: 'rpbj-base-button',
  templateUrl: './base-button.component.html',
  standalone: true,
  imports: [CommonModule],
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
  @Input() size: ISize = 'medium';

  buttonClass: any;

  constructor() {}

  ngOnInit() {
    this.buttonClass = {};
    if (this.styleClass) {
      this.buttonClass[this.styleClass] = true;
    }
    this.styleClass = this.getClasses();
  }

  handleClick(e: any) {
    if (this.disabled) return;
    this.onClickEvent.emit(e);
  }

  getClasses() {
    const classes = ['btn'];

    const classVariant = this.getClassVariantColor(this.variant);
    if (classVariant) classes.push(classVariant);

    const classSize = this.getClassSize(this.size);
    if (classSize) classes.push(classSize);

    if (this.variant == this.variants.ICON) classes.push('btn-icon');

    //if (this.block) classes.push('w-100 d-flex');

    //if (this.classes.trim().length > 0) classes.push(this.classes);

    return classes.join(' ');
  }

  private getClassVariantColor(variant: VARIANTS): string {
    if (variant === this.variants.ICON) {
      return `btn-outline-${this.color}`;
    }

    return `btn-${this.color}`;
  }

  private getClassSize(size: ISize) {
    switch (size) {
      case 'small':
        return 'btn-sm';
      case 'large':
        return 'btn-lg';
      default:
        return '';
    }
  }
}
