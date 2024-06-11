import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';

export type IChangePaginate = {
  page: number;
  pageSize: number;
};

export const initialPagination: IChangePaginate = {
  page: 1,
  pageSize: 10,
};

@Component({
  selector: 'rpbj-data-grid-paginator',
  templateUrl: 'data-grid-paginator.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [NgbPaginationModule, NgSelectModule, CommonModule, FormsModule],
})
export class RpbjDataGridPaginatorComponent implements OnChanges {
  @Input() pageSize = initialPagination.pageSize;
  @Input() page = initialPagination.page;
  @Input() totalItemsPerPage = 0;
  @Input() disabled: boolean = false;
  @Input() total: number = 0;
  @Output() changePaginate = new EventEmitter<IChangePaginate>();
  @Input() pageSizeOptions = [10, 25, 100];
  @Input() pageLength: number = 0;

  localPage = this.page;
  localPageSize = this.pageSize;

  to = 1;
  from = this.pageSize;

  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    this.calPaginationPerPage(this.localPage, this.localPageSize);
  }

  onChangePageSize(pageSize: number) {
    this.localPageSize = pageSize;
    this.calPaginationPerPage(this.localPage, pageSize);
    this.changePaginate.emit({ page: this.localPage, pageSize });
  }

  onChangePaginate(page: number) {
    this.localPage = page;
    this.calPaginationPerPage(this.localPage, this.localPageSize);
    this.changePaginate.emit({ page, pageSize: this.localPageSize });
  }

  private calPaginationPerPage(page: number, pageSize: number) {
    this.to = pageSize * page - pageSize + 1;
    this.from = pageSize * page - (pageSize - this.totalItemsPerPage);
  }
}
