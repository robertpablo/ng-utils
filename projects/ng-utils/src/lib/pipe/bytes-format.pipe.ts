import { Pipe, PipeTransform } from '@angular/core';
import { formatBytesString } from '../utils';

@Pipe({
  name: 'bytesFormat',
})
export class BytesFormatPipe implements PipeTransform {
  transform(value: any): any {
    return formatBytesString(value);
  }
}
