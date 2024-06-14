export interface IPaginationConfig {
  items: any[];
  page: number;
  pageSize: number;
  total: number;
  orderBy: string | null;
  orderDir: 'asc' | 'desc' | null;
}

export interface IDataGridButton {
  action: string;
  icon?: string;
  color?: string;
  tooltip?: string;
  disabled?: (item: any, rowIndex: number) => boolean;
  hidden?: (item: any, rowIndex: number) => boolean;
  styleClass?: string;
  label?: string;
  title?: string;
}

export interface IDataGridColumnDefinition {
  field: string;
  label?: string;
  template?: string;
  buttons?: IDataGridButton[];
  isDatetime?: boolean;
  sortable?: boolean;
  hidden?: boolean;
  dateTimeFormat?: string;
  alignRight?: boolean;
  headerTemplate?: string;
  headerColspan?: number;
  style?: any;
  thClass?: string;
}

export interface IDataGridSource<T> {
  items: T[];
  page?: number;
  pageSize?: number;
  total?: number;
  orderBy?: string;
  orderDir?: string;
  skip?: number;
}

export interface IDataGridCustomHeader {
  override: boolean;
  columns: { colspan: number; label: string; align?: 'center' }[][];
}

export interface IDataGridDefinition {
  columns: IDataGridColumnDefinition[];
  editable?: boolean;
  editableOptions?: {
    disabled?: (item: any, rowIndex: number) => boolean;
    hidden?: (item: any, rowIndex: number) => boolean;
  };
  rowClass?: any;
  customHeader?: IDataGridCustomHeader;
}

export interface IDataGridButtonEvent {
  action: string;
  item: any;
  index: number;
  events?: { openEdit: () => void };
}

export interface IDataGridEvent {
  page: number;
  pageSize: number;
  orderBy: string;
  orderDir: string;
  skip?: number;
}

export interface IDataGridElement<T> {
  loading: boolean;
  definition: IDataGridDefinition;
  source: IDataGridSource<T>;
  error: any;
}
