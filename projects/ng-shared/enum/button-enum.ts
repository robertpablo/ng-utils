export enum VARIANTS {
  NORMAL = 'normal',
  ICON = 'icon',
  BASIC = 'basic',
  STROKED = 'stroked',
  FAB = 'fab',

  OUTLINED = 'outlined',
  FLAT = 'flat',
}

export enum TOOLTIP_POSITION { //TODO: NO USAR
  TOP = 'top',
  RIGHT = 'right',
  BOTTOM = 'bottom',
  LEFT = 'left',
}

export type IColor =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'danger'
  | 'info'
  | 'light'
  | 'dark';

export type ISize = 'small' | 'medium' | 'large';

export enum PLACEMENT {
  TOP = 'top',
  RIGHT = 'right',
  BOTTOM = 'bottom',
  LEFT = 'left',
  TOP_LEFT = 'top-left',
  TOP_RIGHT = 'top-right',
  BOTTOM_LEFT = 'bottom-left',
  BOTTOM_RIGHT = 'bottom-right',
  LEFT_TOP = 'left-top',
  LEFT_BOTTOM = 'left-bottom',
  RIGHT_TOP = 'right-top',
  RIGHT_BOTTOM = 'right-bottom',
}
