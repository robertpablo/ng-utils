import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'rpbj-filter',
  standalone: true,
  imports: [CommonModule, NgbAccordionModule],
  templateUrl: './filter.component.html',
})
export class RpbjFilterComponent {}
