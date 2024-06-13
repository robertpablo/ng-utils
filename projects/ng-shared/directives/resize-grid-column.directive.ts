import { Directive, OnInit, Renderer2, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[resizeGridColumn]',
  standalone: true,
})
export class ResizeColumnDirective implements OnInit {
  @Input('resizeGridColumn') resizable: boolean = false;
  @Input() index: number = 0;

  private startX: number = 0;
  private startWidth!: number;
  private column: HTMLElement;
  private table!: HTMLElement;
  private pressed!: boolean;

  constructor(private renderer: Renderer2, private el: ElementRef) {
    this.column = this.el.nativeElement;
  }

  ngOnInit() {
    setTimeout(() => {
      if (this.resizable) {
        this.column.style.maxWidth = '';
        const row = this.renderer.parentNode(this.column);
        const thead = this.renderer.parentNode(row);
        this.table = this.renderer.parentNode(thead);

        const resizer = this.renderer.createElement('span');
        this.renderer.addClass(resizer, 'resize-holder');
        this.renderer.appendChild(this.column, resizer);
        this.renderer.listen(resizer, 'mousedown', this.onMouseDown);
        this.renderer.listen(this.table, 'mousemove', this.onMouseMove);
        this.renderer.listen('document', 'mouseup', this.onMouseUp);
      }
    });
  }

  onMouseDown = (event: MouseEvent) => {
    this.pressed = true;
    this.startX = event.pageX;
    this.startWidth = this.column.offsetWidth;
  };

  onMouseMove = (event: MouseEvent) => {
    const offset = 0;
    if (!this.pressed) {
      return;
    }
    if (event.buttons) {
      this.renderer.addClass(this.table, 'resizing');

      // Calculate width of column
      let width = this.startWidth + (event.pageX - this.startX - offset);

      const tableCells = Array.from(
        this.table.querySelectorAll('.data-grid-row')
      ).map((row: any) =>
        row.querySelectorAll('.data-grid-cell').item(this.index)
      );

      this.renderer.setStyle(this.column, 'width', `${width}px`);

      tableCells
        .filter((x) => x)
        .forEach((cell) => {
          this.renderer.setStyle(cell, 'width', `${width}px`);
        });
    }
  };

  onMouseUp = (event: MouseEvent) => {
    if (this.pressed) {
      this.pressed = false;
      this.renderer.removeClass(this.table, 'resizing');
    }
  };
}
