import { CommonModule } from '@angular/common';
import {
  AfterContentInit,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import * as _ from 'lodash';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, takeUntil } from 'rxjs/operators';
import {
  IDataGridButtonEvent,
  IDataGridDefinition,
  IDataGridEvent,
  IDataGridSource,
  IPaginationConfig,
} from '@ropabajo/shared/interfaces';
import { RpbjDataGridPaginatorComponent } from './data-grid-paginator';
import { RpbjDataGridBodyColumnComponent } from './data-grid-column-body';
import { RpbjDataGridHeadColumnComponent } from './data-grid-column-head';
import { DateFormatPipe } from '@ropabajo/shared/pipe';
import { ResizeColumnDirective } from '@ropabajo/shared/directives';

class TableDataSource {
  pagination: IPaginationConfig = {
    items: [],
    page: 1,
    pageSize: 5,
    total: 0,
    orderBy: null,
    orderDir: null,
  };

  constructor(
    private source: any[],
    pagination: Partial<IPaginationConfig> = {}
  ) {
    this.pagination = {
      ...this.pagination,
      ...pagination,
      items: this.source,
      total: this.source.length,
    };
    this.paginate(this.source);
  }

  paginate = (source: any[]) => {
    const { page, pageSize, orderBy, orderDir } = this.pagination;

    this.pagination.total = source.length;

    if (orderBy && orderDir) {
      this.source = _.orderBy(source, [orderBy], [orderDir]);
    }

    this.pagination = {
      ...this.pagination,
      items: source.slice((page - 1) * pageSize).slice(0, pageSize),
    };
  };

  setSource = (source: any) => {
    this.source = source;
  };

  setPagination = (pagination: any, textFilter: string = '') => {
    this.pagination = {
      ...this.pagination,
      ...pagination,
      total: this.source.length,
    };
    if (textFilter) {
      this.paginate(this.searchTextInArray(this.source, textFilter));
    } else {
      this.paginate(this.source);
    }
  };

  searchTextInArray = (source: any, text: any) => {
    return source.filter(
      (s: any) =>
        Object.values(s).filter((val) => {
          return `${val}`.toLowerCase().includes(text.toLowerCase());
        }).length > 0
    );
  };
}

@Component({
  selector: 'rpbj-data-grid',
  standalone: true,
  imports: [
    CommonModule,
    RpbjDataGridBodyColumnComponent,
    RpbjDataGridHeadColumnComponent,
    DateFormatPipe,
    RpbjDataGridPaginatorComponent,
    ResizeColumnDirective,
  ],

  templateUrl: './data-grid.component.html',
})
export class RpbjDataGridComponent
  implements OnInit, AfterContentInit, OnChanges, OnDestroy
{
  @Input() loading: boolean = false;
  @Input() showRowIndex?: boolean = false;
  @Output('on-click-row') onClickRowEvent: EventEmitter<any> =
    new EventEmitter();
  @Output('on-click-button')
  onClickButtonEvent: EventEmitter<IDataGridButtonEvent> = new EventEmitter();
  @Output('on-close-new') onCloseNewEvent: EventEmitter<IDataGridButtonEvent> =
    new EventEmitter();
  @Output('on-load-data') onLoadDataEvent: EventEmitter<IDataGridEvent> =
    new EventEmitter();
  localDataSource!: TableDataSource;
  localFilter = new Subject<string>();
  private unsubscribeAll: Subject<any> = new Subject();
  localTextFilter = '';
  serverErrorMessage: string = '';
  rowSelected: number = -1;
  customTemplates: any = {};
  formNewModel: any = undefined;
  @Input() source!: IDataGridSource<any>;
  @Input() definition: IDataGridDefinition = { columns: [], editable: false };
  @Input() serverError?: any = undefined;
  @Input() pageSizeOptions = [10, 25, 50, 100];
  @Input() emptyRowsMsg: string = 'No se encontraron resultados';

  isOpenNew: boolean = false;
  editWorkData: any = {};
  expandableState: any = {};
  columnResize: boolean = false;
  customHeadersTemplates: any = {};

  ngOnInit() {
    this.buildLocalDataSource();
    this.subscribeToFilter();
  }

  ngOnDestroy() {
    this.unsubscribeAll.next(0);
    this.unsubscribeAll.complete();
  }

  //gridType: GridType = GridType.serverPagination;
  private buildLocalDataSource = () => {
    const defaultPagination = {} as any;

    this.localDataSource = new TableDataSource(
      this.source.items,
      defaultPagination
    );
  };

  private subscribeToFilter = () => {
    this.localFilter
      .pipe(takeUntil(this.unsubscribeAll))
      .pipe(debounceTime(400), distinctUntilChanged())
      .subscribe((e: any) => {
        this.localDataSource.setPagination({ page: 1 }, this.localTextFilter);
      });
  };

  ngAfterContentInit(): void {
    const customColumns = this.definition.columns.filter((x) => x.template);

    if (customColumns.length > 0) {
      // customColumns.forEach(x => {
      //   const matches = this.templates.filter(
      //     temp => temp.getType() === x.field
      //   );
      //   if (matches.length > 0) {
      //     this.customTemplates[x.field] = matches[0].template;
      //   }
      // });
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (
      changes['source'] &&
      changes['source'].currentValue &&
      changes['source'].firstChange
    ) {
      this.buildLocalDataSource();
    }

    if (
      changes['serverError'] &&
      changes['serverError'].currentValue !== undefined
    ) {
      this.serverErrorMessage = this.buildServerErrorMessage(
        changes['serverError'].currentValue
      );
    }

    if (
      changes['openNew'] !== undefined &&
      changes['openNew'].currentValue !== undefined
    ) {
      //this.setOpenNew(changes['openNew'].currentValue);
      console.log('this.setOpenNew(changes[openNew].currentValue);');
    }
  }

  buildServerErrorMessage = (error: any) => {
    if (!error) return '';

    if (typeof error === 'string') {
      return error;
    }

    return 'Ocurrió un error al cargar los datos';
  };

  public calcNroRow = (indexRow: number): number => {
    const { page = 1, pageSize = 10 } = this.source;
    return indexRow + 1 + (page - 1) * pageSize;
  };

  get columnsToDisplay() {
    return this.definition.columns.filter((x) => !x.hidden);
  }

  rowClass = (rowIndex: any, item: any) => {
    const _class: any = {
      'row-selected': this.rowSelected === rowIndex,
      'row-background': rowIndex % 2 === 0,
    };
    if (this.definition.rowClass) {
      Object.keys(this.definition.rowClass).forEach((k) => {
        _class[k] = this.definition.rowClass[k](item);
      });
    }
    return _class;
  };

  handleClickRow = (rowIndex: any, row: any) => {
    this.onClickRowEvent.emit({
      item: row,
      index: rowIndex,
    });
  };

  handleClickButton = (e: any) => {
    this.rowSelected = e.index;
    this.onClickButtonEvent.emit({
      item: e.item,
      action: e.action,
      index: e.index,
      events: {
        openEdit: () => {
          if (this.definition.editable) {
            this.handleEditRow(e.index);
          }
        },
      },
    });
  };

  handleEditRow = (rowIndex: any) => {
    this.checkBeforeEditInline().then(() => {
      this.rowSelected = rowIndex;
      const data = this.source.items[rowIndex];
      this.editWorkData[rowIndex] = {
        $$edit: true,
        data: this.cloneObject(data),
      };
    });
  };

  private checkBeforeEditInline = () => {
    return new Promise((resolve, reject) => {
      if (this.isOpenNew) {
        this.handleCloseNew();
        resolve(null);
      } else {
        this.handleCloseNew();
        resolve(null);
      }
    });
  };

  handleCloseNew = () => {
    this.onCloseNewEvent.emit();
    this.formNewModel = null;
  };

  cloneObject = (data: any) => {
    return JSON.parse(JSON.stringify(data));
  };

  isRowExpanded = (rowIndex: any) => {
    return (
      this.expandableState[rowIndex] && this.expandableState[rowIndex] === true
    );
  };

  handleOpenExpandable = (index: any) => () => {
    this.expandableState[index] = true;
  };

  handleCloseExpandable = (index: any) => () => {
    this.expandableState[index] = false;
  };

  isEditableGrid(): boolean {
    return !!this.definition.editable;
  }

  handleSort = (event: any) => {
    this.onLoadData(
      this.source.page,
      this.source.pageSize,
      event.active,
      event.direction
    );
  };

  get contextHeader() {
    return {
      $implicit: this.source,
      actions: { handleSort: this.handleSort },
      customHeader: this.definition.customHeader,
    };
  }

  get contextPaginator() {
    return {
      $implicit: this.source,
      show: !this.serverError,
      disabled: this.loading,
      comboPageSizeOptions: this.pageSizeOptions,
      actions: {
        handleChangePage: this.handleChangePage,
        handleChangePageSize: this.handleChangePageSize,
      },
    };
  }

  private onLoadData = (
    page: any,
    pageSize: any,
    orderBy: any,
    orderDir: any
  ) => {
    this.resetExpandableState();
    this.checkIsEditing()
      .then(() => {
        this.onLoadDataEvent.emit({
          page,
          pageSize,
          orderBy,
          orderDir,
          skip: this.calcSkipByPage(page, pageSize),
        });
      })
      .catch(() => {});
  };

  resetExpandableState = () => {
    this.expandableState = {};
  };

  private resetEditWorkData = () => {
    this.editWorkData = {};
  };

  checkIsEditing = () => {
    return new Promise((resolve, reject) => {
      resolve(null);
      this.resetEditWorkData();
    });
  };

  private calcSkipByPage = (page: number, pageSize: number): number => {
    return (page - 1) * pageSize;
  };

  handleChangePage = (page: number) => {
    this.onLoadData(
      page,
      this.source.pageSize,
      this.source.orderBy,
      this.source.orderDir
    );
  };

  handleChangePageSize = (pageSize: number) => {
    const page = 1;
    this.onLoadData(page, pageSize, this.source.orderBy, this.source.orderDir);
  };
}
