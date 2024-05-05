import { Pipe } from '@angular/core';
import { formatBytesString } from '../utils';
import * as i0 from "@angular/core";
export class BytesFormatPipe {
    transform(value) {
        return formatBytesString(value);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.7", ngImport: i0, type: BytesFormatPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "17.3.7", ngImport: i0, type: BytesFormatPipe, name: "bytesFormat" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.7", ngImport: i0, type: BytesFormatPipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'bytesFormat',
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnl0ZXMtZm9ybWF0LnBpcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy11dGlscy9zcmMvbGliL3BpcGUvYnl0ZXMtZm9ybWF0LnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sVUFBVSxDQUFDOztBQUs3QyxNQUFNLE9BQU8sZUFBZTtJQUMxQixTQUFTLENBQUMsS0FBVTtRQUNsQixPQUFPLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2xDLENBQUM7OEdBSFUsZUFBZTs0R0FBZixlQUFlOzsyRkFBZixlQUFlO2tCQUgzQixJQUFJO21CQUFDO29CQUNKLElBQUksRUFBRSxhQUFhO2lCQUNwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgZm9ybWF0Qnl0ZXNTdHJpbmcgfSBmcm9tICcuLi91dGlscyc7XHJcblxyXG5AUGlwZSh7XHJcbiAgbmFtZTogJ2J5dGVzRm9ybWF0JyxcclxufSlcclxuZXhwb3J0IGNsYXNzIEJ5dGVzRm9ybWF0UGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gIHRyYW5zZm9ybSh2YWx1ZTogYW55KTogYW55IHtcclxuICAgIHJldHVybiBmb3JtYXRCeXRlc1N0cmluZyh2YWx1ZSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==