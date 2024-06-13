import { Pipe, PipeTransform } from '@angular/core';
import moment from 'moment';

const DATE_FORMAT = 'DD/MM/YYYY';

@Pipe({
  name: 'dateFormat',
  standalone: true,
})
export class DateFormatPipe implements PipeTransform {
  transform(value: any, defaultMsg: string = '', format: string = ''): any {
    if (!value) return defaultMsg !== '' ? defaultMsg : '-';
    return moment(value).format(format || DATE_FORMAT);
  }
}
