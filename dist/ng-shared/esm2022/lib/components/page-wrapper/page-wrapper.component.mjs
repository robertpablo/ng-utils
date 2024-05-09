import { Component, ContentChildren, Input, inject, } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgbCollapseModule, NgbDropdownModule, NgbScrollSpyModule, NgbScrollSpyService, } from '@ng-bootstrap/ng-bootstrap';
import { PageHeaderComponent } from '../page-header.component';
import * as i0 from "@angular/core";
export class RpbjPageWrapper {
    constructor(ngZone) {
        this.sidebarCollapsed = true;
        this._scrollSpy = inject(NgbScrollSpyService);
        const largeScreenQL = matchMedia('(max-width: 1199.98px)');
        this.isLargeScreenOrLess = largeScreenQL.matches;
        largeScreenQL.addListener((event) => ngZone.run(() => (this.isLargeScreenOrLess = event.matches)));
    }
    ngAfterViewInit() {
        this._scrollSpy.start({
            fragments: this.tableOfContents.map(({ fragment }) => fragment),
        });
    }
    get tableOfContents() {
        return this._tableOfContents ? this._tableOfContents.toArray() : [];
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.7", ngImport: i0, type: RpbjPageWrapper, deps: [{ token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.7", type: RpbjPageWrapper, isStandalone: true, selector: "rpbj-page-wrapper", inputs: { pageTitle: "pageTitle" }, queries: [{ propertyName: "_tableOfContents", predicate: PageHeaderComponent }], ngImport: i0, template: "", dependencies: [{ kind: "ngmodule", type: NgbCollapseModule }, { kind: "ngmodule", type: NgbDropdownModule }, { kind: "ngmodule", type: NgbScrollSpyModule }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.7", ngImport: i0, type: RpbjPageWrapper, decorators: [{
            type: Component,
            args: [{ selector: 'rpbj-page-wrapper', standalone: true, imports: [
                        NgbCollapseModule,
                        NgbDropdownModule,
                        NgbScrollSpyModule,
                        RouterLink,
                    ], template: "" }]
        }], ctorParameters: () => [{ type: i0.NgZone }], propDecorators: { pageTitle: [{
                type: Input
            }], _tableOfContents: [{
                type: ContentChildren,
                args: [PageHeaderComponent]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS13cmFwcGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nLXNoYXJlZC9zcmMvbGliL2NvbXBvbmVudHMvcGFnZS13cmFwcGVyL3BhZ2Utd3JhcHBlci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1zaGFyZWQvc3JjL2xpYi9jb21wb25lbnRzL3BhZ2Utd3JhcHBlci9wYWdlLXdyYXBwZXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUVMLFNBQVMsRUFDVCxlQUFlLEVBQ2YsS0FBSyxFQUdMLE1BQU0sR0FDUCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDN0MsT0FBTyxFQUNMLGlCQUFpQixFQUNqQixpQkFBaUIsRUFDakIsa0JBQWtCLEVBQ2xCLG1CQUFtQixHQUNwQixNQUFNLDRCQUE0QixDQUFDO0FBQ3BDLE9BQU8sRUFBRSxtQkFBbUIsRUFBbUIsTUFBTSwwQkFBMEIsQ0FBQzs7QUFhaEYsTUFBTSxPQUFPLGVBQWU7SUFXMUIsWUFBWSxNQUFjO1FBTDFCLHFCQUFnQixHQUFHLElBQUksQ0FBQztRQUdoQixlQUFVLEdBQUcsTUFBTSxDQUFDLG1CQUFtQixDQUFDLENBQUM7UUFHL0MsTUFBTSxhQUFhLEdBQUcsVUFBVSxDQUFDLHdCQUF3QixDQUFDLENBQUM7UUFDM0QsSUFBSSxDQUFDLG1CQUFtQixHQUFHLGFBQWEsQ0FBQyxPQUFPLENBQUM7UUFDakQsYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQ2xDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQzdELENBQUM7SUFDSixDQUFDO0lBRUQsZUFBZTtRQUNiLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDO1lBQ3BCLFNBQVMsRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxDQUFDLFFBQVEsQ0FBQztTQUNoRSxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsSUFBSSxlQUFlO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUN0RSxDQUFDOzhHQTNCVSxlQUFlO2tHQUFmLGVBQWUsa0pBR1QsbUJBQW1CLDZCQ2hDdEMsRUFBQSwyQ0RzQkksaUJBQWlCLDhCQUNqQixpQkFBaUIsOEJBQ2pCLGtCQUFrQjs7MkZBS1QsZUFBZTtrQkFYM0IsU0FBUzsrQkFDRSxtQkFBbUIsY0FDakIsSUFBSSxXQUNQO3dCQUNQLGlCQUFpQjt3QkFDakIsaUJBQWlCO3dCQUNqQixrQkFBa0I7d0JBQ2xCLFVBQVU7cUJBQ1g7MkVBSVEsU0FBUztzQkFBakIsS0FBSztnQkFHRSxnQkFBZ0I7c0JBRHZCLGVBQWU7dUJBQUMsbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBBZnRlclZpZXdJbml0LFxyXG4gIENvbXBvbmVudCxcclxuICBDb250ZW50Q2hpbGRyZW4sXHJcbiAgSW5wdXQsXHJcbiAgTmdab25lLFxyXG4gIFF1ZXJ5TGlzdCxcclxuICBpbmplY3QsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlckxpbmsgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQge1xyXG4gIE5nYkNvbGxhcHNlTW9kdWxlLFxyXG4gIE5nYkRyb3Bkb3duTW9kdWxlLFxyXG4gIE5nYlNjcm9sbFNweU1vZHVsZSxcclxuICBOZ2JTY3JvbGxTcHlTZXJ2aWNlLFxyXG59IGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwJztcclxuaW1wb3J0IHsgUGFnZUhlYWRlckNvbXBvbmVudCwgVGFibGVPZkNvbnRlbnRzIH0gZnJvbSAnLi4vcGFnZS1oZWFkZXIuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAncnBiai1wYWdlLXdyYXBwZXInLFxyXG4gIHN0YW5kYWxvbmU6IHRydWUsXHJcbiAgaW1wb3J0czogW1xyXG4gICAgTmdiQ29sbGFwc2VNb2R1bGUsXHJcbiAgICBOZ2JEcm9wZG93bk1vZHVsZSxcclxuICAgIE5nYlNjcm9sbFNweU1vZHVsZSxcclxuICAgIFJvdXRlckxpbmssXHJcbiAgXSxcclxuICB0ZW1wbGF0ZVVybDogJy4vcGFnZS13cmFwcGVyLmNvbXBvbmVudC5odG1sJyxcclxufSlcclxuZXhwb3J0IGNsYXNzIFJwYmpQYWdlV3JhcHBlciBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xyXG4gIEBJbnB1dCgpIHBhZ2VUaXRsZSE6IHN0cmluZztcclxuXHJcbiAgQENvbnRlbnRDaGlsZHJlbihQYWdlSGVhZGVyQ29tcG9uZW50KVxyXG4gIHByaXZhdGUgX3RhYmxlT2ZDb250ZW50cyE6IFF1ZXJ5TGlzdDxQYWdlSGVhZGVyQ29tcG9uZW50PjtcclxuXHJcbiAgc2lkZWJhckNvbGxhcHNlZCA9IHRydWU7XHJcbiAgaXNMYXJnZVNjcmVlbk9yTGVzczogYm9vbGVhbjtcclxuXHJcbiAgcHJpdmF0ZSBfc2Nyb2xsU3B5ID0gaW5qZWN0KE5nYlNjcm9sbFNweVNlcnZpY2UpO1xyXG5cclxuICBjb25zdHJ1Y3RvcihuZ1pvbmU6IE5nWm9uZSkge1xyXG4gICAgY29uc3QgbGFyZ2VTY3JlZW5RTCA9IG1hdGNoTWVkaWEoJyhtYXgtd2lkdGg6IDExOTkuOThweCknKTtcclxuICAgIHRoaXMuaXNMYXJnZVNjcmVlbk9yTGVzcyA9IGxhcmdlU2NyZWVuUUwubWF0Y2hlcztcclxuICAgIGxhcmdlU2NyZWVuUUwuYWRkTGlzdGVuZXIoKGV2ZW50KSA9PlxyXG4gICAgICBuZ1pvbmUucnVuKCgpID0+ICh0aGlzLmlzTGFyZ2VTY3JlZW5Pckxlc3MgPSBldmVudC5tYXRjaGVzKSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICB0aGlzLl9zY3JvbGxTcHkuc3RhcnQoe1xyXG4gICAgICBmcmFnbWVudHM6IHRoaXMudGFibGVPZkNvbnRlbnRzLm1hcCgoeyBmcmFnbWVudCB9KSA9PiBmcmFnbWVudCksXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGdldCB0YWJsZU9mQ29udGVudHMoKTogVGFibGVPZkNvbnRlbnRzIHtcclxuICAgIHJldHVybiB0aGlzLl90YWJsZU9mQ29udGVudHMgPyB0aGlzLl90YWJsZU9mQ29udGVudHMudG9BcnJheSgpIDogW107XHJcbiAgfVxyXG59XHJcbiIsIiJdfQ==