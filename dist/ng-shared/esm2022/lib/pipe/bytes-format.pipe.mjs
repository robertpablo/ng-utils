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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnl0ZXMtZm9ybWF0LnBpcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1zaGFyZWQvc3JjL2xpYi9waXBlL2J5dGVzLWZvcm1hdC5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ3BELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLFVBQVUsQ0FBQzs7QUFLN0MsTUFBTSxPQUFPLGVBQWU7SUFDMUIsU0FBUyxDQUFDLEtBQVU7UUFDbEIsT0FBTyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNsQyxDQUFDOzhHQUhVLGVBQWU7NEdBQWYsZUFBZTs7MkZBQWYsZUFBZTtrQkFIM0IsSUFBSTttQkFBQztvQkFDSixJQUFJLEVBQUUsYUFBYTtpQkFDcEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGZvcm1hdEJ5dGVzU3RyaW5nIH0gZnJvbSAnLi4vdXRpbHMnO1xyXG5cclxuQFBpcGUoe1xyXG4gIG5hbWU6ICdieXRlc0Zvcm1hdCcsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCeXRlc0Zvcm1hdFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICB0cmFuc2Zvcm0odmFsdWU6IGFueSk6IGFueSB7XHJcbiAgICByZXR1cm4gZm9ybWF0Qnl0ZXNTdHJpbmcodmFsdWUpO1xyXG4gIH1cclxufVxyXG4iXX0=