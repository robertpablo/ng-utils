import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import '@angular/common/locales/global/es-PE';
import { RouterModule } from '@angular/router';
import { BytesFormatPipe } from './pipe';
import { RpbjPageWrapper } from './components';
import * as i0 from "@angular/core";
export class CoreModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.7", ngImport: i0, type: CoreModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "17.3.7", ngImport: i0, type: CoreModule, declarations: [BytesFormatPipe], imports: [NgSelectModule,
            NgbPaginationModule,
            FormsModule,
            CommonModule,
            RouterModule,
            RpbjPageWrapper], exports: [RpbjPageWrapper] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "17.3.7", ngImport: i0, type: CoreModule, providers: [{ provide: LOCALE_ID, useValue: 'es-PE' }, DecimalPipe], imports: [NgSelectModule,
            NgbPaginationModule,
            FormsModule,
            CommonModule,
            RouterModule,
            RpbjPageWrapper] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.7", ngImport: i0, type: CoreModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [BytesFormatPipe],
                    exports: [RpbjPageWrapper],
                    imports: [
                        NgSelectModule,
                        NgbPaginationModule,
                        FormsModule,
                        CommonModule,
                        RouterModule,
                        RpbjPageWrapper
                    ],
                    providers: [{ provide: LOCALE_ID, useValue: 'es-PE' }, DecimalPipe],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy11dGlscy9zcmMvbGliL2NvcmUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3BELE9BQU8sRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNqRSxPQUFPLHNDQUFzQyxDQUFDO0FBQzlDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxjQUFjLENBQUM7O0FBZ0IvQyxNQUFNLE9BQU8sVUFBVTs4R0FBVixVQUFVOytHQUFWLFVBQVUsaUJBYk4sZUFBZSxhQUc1QixjQUFjO1lBQ2QsbUJBQW1CO1lBQ25CLFdBQVc7WUFDWCxZQUFZO1lBQ1osWUFBWTtZQUNaLGVBQWUsYUFQUCxlQUFlOytHQVlkLFVBQVUsYUFGVixDQUFDLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLEVBQUUsV0FBVyxDQUFDLFlBUmpFLGNBQWM7WUFDZCxtQkFBbUI7WUFDbkIsV0FBVztZQUNYLFlBQVk7WUFDWixZQUFZO1lBQ1osZUFBZTs7MkZBS04sVUFBVTtrQkFkdEIsUUFBUTttQkFBQztvQkFDUixZQUFZLEVBQUUsQ0FBQyxlQUFlLENBQUM7b0JBQy9CLE9BQU8sRUFBRSxDQUFDLGVBQWUsQ0FBQztvQkFDMUIsT0FBTyxFQUFFO3dCQUNQLGNBQWM7d0JBQ2QsbUJBQW1CO3dCQUNuQixXQUFXO3dCQUNYLFlBQVk7d0JBQ1osWUFBWTt3QkFDWixlQUFlO3FCQUNoQjtvQkFFRCxTQUFTLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxFQUFFLFdBQVcsQ0FBQztpQkFDcEUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMT0NBTEVfSUQsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSwgRGVjaW1hbFBpcGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBOZ1NlbGVjdE1vZHVsZSB9IGZyb20gJ0BuZy1zZWxlY3Qvbmctc2VsZWN0JztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IE5nYlBhZ2luYXRpb25Nb2R1bGUgfSBmcm9tICdAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCc7XHJcbmltcG9ydCAnQGFuZ3VsYXIvY29tbW9uL2xvY2FsZXMvZ2xvYmFsL2VzLVBFJztcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgQnl0ZXNGb3JtYXRQaXBlIH0gZnJvbSAnLi9waXBlJztcclxuaW1wb3J0IHsgUnBialBhZ2VXcmFwcGVyIH0gZnJvbSAnLi9jb21wb25lbnRzJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbQnl0ZXNGb3JtYXRQaXBlXSxcclxuICBleHBvcnRzOiBbUnBialBhZ2VXcmFwcGVyXSxcclxuICBpbXBvcnRzOiBbXHJcbiAgICBOZ1NlbGVjdE1vZHVsZSxcclxuICAgIE5nYlBhZ2luYXRpb25Nb2R1bGUsXHJcbiAgICBGb3Jtc01vZHVsZSxcclxuICAgIENvbW1vbk1vZHVsZSxcclxuICAgIFJvdXRlck1vZHVsZSxcclxuICAgIFJwYmpQYWdlV3JhcHBlclxyXG4gIF0sXHJcblxyXG4gIHByb3ZpZGVyczogW3sgcHJvdmlkZTogTE9DQUxFX0lELCB1c2VWYWx1ZTogJ2VzLVBFJyB9LCBEZWNpbWFsUGlwZV0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb3JlTW9kdWxlIHt9XHJcbiJdfQ==