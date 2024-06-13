import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IDataGridButton } from '@ropabajo/shared/interfaces';
import { VARIANTS } from '@ropabajo/shared/enum';

@Component({
  selector: 'rpbj-data-grid-demo',
  templateUrl: './data-grid-demo.component.html',
  standalone: true,
  imports: [CommonModule],
})
export class DataGridDemoComponent {
  @Input() buttons?: IDataGridButton[] = [];
  variants = VARIANTS;
}
