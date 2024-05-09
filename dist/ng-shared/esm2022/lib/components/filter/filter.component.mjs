import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import * as i0 from "@angular/core";
import * as i1 from "@ng-bootstrap/ng-bootstrap";
export class RpbjFilter {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.7", ngImport: i0, type: RpbjFilter, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.7", type: RpbjFilter, isStandalone: true, selector: "rpbj-filter", ngImport: i0, template: "<div ngbAccordion>\r\n  <div ngbAccordionItem [collapsed]=\"false\">\r\n    <h2 ngbAccordionHeader>\r\n      <button ngbAccordionButton>\r\n        <span class=\"title-group-uppercase\">Filtros de b\u00FAsqueda</span>\r\n      </button>\r\n    </h2>\r\n    <div ngbAccordionCollapse>\r\n      <div ngbAccordionBody>\r\n        <ng-content></ng-content>\r\n\r\n        <div class=\"row gx-2 justify-content-end\">\r\n          <div class=\"col-auto\">\r\n            <button type=\"button\" class=\"btn btn-cancel btn-secondary me-2\">\r\n              <span class=\"feather icon-refresh-ccw\"></span>\r\n              Limpiar\r\n            </button>\r\n\r\n            <button type=\"button\" class=\"btn btn-primary\">\r\n              <span class=\"feather icon-search\"></span>\r\n              Buscar\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n", dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "ngmodule", type: NgbAccordionModule }, { kind: "directive", type: i1.NgbAccordionButton, selector: "button[ngbAccordionButton]" }, { kind: "directive", type: i1.NgbAccordionDirective, selector: "[ngbAccordion]", inputs: ["animation", "closeOthers", "destroyOnHide"], outputs: ["show", "shown", "hide", "hidden"], exportAs: ["ngbAccordion"] }, { kind: "directive", type: i1.NgbAccordionItem, selector: "[ngbAccordionItem]", inputs: ["ngbAccordionItem", "destroyOnHide", "disabled", "collapsed"], outputs: ["show", "shown", "hide", "hidden"], exportAs: ["ngbAccordionItem"] }, { kind: "directive", type: i1.NgbAccordionHeader, selector: "[ngbAccordionHeader]" }, { kind: "directive", type: i1.NgbAccordionBody, selector: "[ngbAccordionBody]" }, { kind: "directive", type: i1.NgbAccordionCollapse, selector: "[ngbAccordionCollapse]", exportAs: ["ngbAccordionCollapse"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.7", ngImport: i0, type: RpbjFilter, decorators: [{
            type: Component,
            args: [{ selector: 'rpbj-filter', standalone: true, imports: [CommonModule, NgbAccordionModule], template: "<div ngbAccordion>\r\n  <div ngbAccordionItem [collapsed]=\"false\">\r\n    <h2 ngbAccordionHeader>\r\n      <button ngbAccordionButton>\r\n        <span class=\"title-group-uppercase\">Filtros de b\u00FAsqueda</span>\r\n      </button>\r\n    </h2>\r\n    <div ngbAccordionCollapse>\r\n      <div ngbAccordionBody>\r\n        <ng-content></ng-content>\r\n\r\n        <div class=\"row gx-2 justify-content-end\">\r\n          <div class=\"col-auto\">\r\n            <button type=\"button\" class=\"btn btn-cancel btn-secondary me-2\">\r\n              <span class=\"feather icon-refresh-ccw\"></span>\r\n              Limpiar\r\n            </button>\r\n\r\n            <button type=\"button\" class=\"btn btn-primary\">\r\n              <span class=\"feather icon-search\"></span>\r\n              Buscar\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nLXNoYXJlZC9zcmMvbGliL2NvbXBvbmVudHMvZmlsdGVyL2ZpbHRlci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1zaGFyZWQvc3JjL2xpYi9jb21wb25lbnRzL2ZpbHRlci9maWx0ZXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUMsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7OztBQVFoRSxNQUFNLE9BQU8sVUFBVTs4R0FBVixVQUFVO2tHQUFWLFVBQVUsdUVDVnZCLDg1QkE0QkEsMkNEckJZLFlBQVksOEJBQUUsa0JBQWtCOzsyRkFHL0IsVUFBVTtrQkFOdEIsU0FBUzsrQkFDRSxhQUFhLGNBQ1gsSUFBSSxXQUNQLENBQUMsWUFBWSxFQUFFLGtCQUFrQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5nYkFjY29yZGlvbk1vZHVsZSB9IGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAncnBiai1maWx0ZXInLFxyXG4gIHN0YW5kYWxvbmU6IHRydWUsXHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgTmdiQWNjb3JkaW9uTW9kdWxlXSxcclxuICB0ZW1wbGF0ZVVybDogJy4vZmlsdGVyLmNvbXBvbmVudC5odG1sJyxcclxufSlcclxuZXhwb3J0IGNsYXNzIFJwYmpGaWx0ZXIge31cclxuIiwiPGRpdiBuZ2JBY2NvcmRpb24+XHJcbiAgPGRpdiBuZ2JBY2NvcmRpb25JdGVtIFtjb2xsYXBzZWRdPVwiZmFsc2VcIj5cclxuICAgIDxoMiBuZ2JBY2NvcmRpb25IZWFkZXI+XHJcbiAgICAgIDxidXR0b24gbmdiQWNjb3JkaW9uQnV0dG9uPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwidGl0bGUtZ3JvdXAtdXBwZXJjYXNlXCI+RmlsdHJvcyBkZSBiw7pzcXVlZGE8L3NwYW4+XHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgPC9oMj5cclxuICAgIDxkaXYgbmdiQWNjb3JkaW9uQ29sbGFwc2U+XHJcbiAgICAgIDxkaXYgbmdiQWNjb3JkaW9uQm9keT5cclxuICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgZ3gtMiBqdXN0aWZ5LWNvbnRlbnQtZW5kXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWF1dG9cIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLWNhbmNlbCBidG4tc2Vjb25kYXJ5IG1lLTJcIj5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZlYXRoZXIgaWNvbi1yZWZyZXNoLWNjd1wiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICBMaW1waWFyXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIj5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZlYXRoZXIgaWNvbi1zZWFyY2hcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgQnVzY2FyXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PlxyXG4iXX0=