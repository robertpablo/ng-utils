import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import * as i0 from "@angular/core";
export class PageHeaderComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.7", ngImport: i0, type: PageHeaderComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.7", type: PageHeaderComponent, isStandalone: true, selector: "rpbj-page-header", inputs: { fragment: "fragment", title: "title" }, host: { classAttribute: "d-block" }, ngImport: i0, template: `
    <h2 [id]="fragment">
      <a class="title-fragment" routerLink="." [fragment]="fragment">
        <i
          class="bi bi-link-45deg"
          style="font-size: 1.75rem; color: var(--bs-heading-color)"
        ></i>
      </a>
      {{ title }}
    </h2>
    <ng-content></ng-content>
  `, isInline: true, dependencies: [{ kind: "directive", type: RouterLink, selector: "[routerLink]", inputs: ["target", "queryParams", "fragment", "queryParamsHandling", "state", "info", "relativeTo", "preserveFragment", "skipLocationChange", "replaceUrl", "routerLink"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.7", ngImport: i0, type: PageHeaderComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'rpbj-page-header',
                    standalone: true,
                    imports: [RouterLink],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    host: {
                        class: 'd-block',
                    },
                    template: `
    <h2 [id]="fragment">
      <a class="title-fragment" routerLink="." [fragment]="fragment">
        <i
          class="bi bi-link-45deg"
          style="font-size: 1.75rem; color: var(--bs-heading-color)"
        ></i>
      </a>
      {{ title }}
    </h2>
    <ng-content></ng-content>
  `,
                }]
        }], propDecorators: { fragment: [{
                type: Input
            }], title: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1oZWFkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctc2hhcmVkL3NyYy9saWIvY29tcG9uZW50cy9wYWdlLWhlYWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGlCQUFpQixDQUFDOztBQXlCN0MsTUFBTSxPQUFPLG1CQUFtQjs4R0FBbkIsbUJBQW1CO2tHQUFuQixtQkFBbUIsbUtBYnBCOzs7Ozs7Ozs7OztHQVdULDREQWhCUyxVQUFVOzsyRkFrQlQsbUJBQW1CO2tCQXJCL0IsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsa0JBQWtCO29CQUM1QixVQUFVLEVBQUUsSUFBSTtvQkFDaEIsT0FBTyxFQUFFLENBQUMsVUFBVSxDQUFDO29CQUNyQixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsSUFBSSxFQUFFO3dCQUNKLEtBQUssRUFBRSxTQUFTO3FCQUNqQjtvQkFDRCxRQUFRLEVBQUU7Ozs7Ozs7Ozs7O0dBV1Q7aUJBQ0Y7OEJBRVUsUUFBUTtzQkFBaEIsS0FBSztnQkFDRyxLQUFLO3NCQUFiLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXJMaW5rIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuXHJcbmV4cG9ydCB0eXBlIFRhYmxlT2ZDb250ZW50cyA9IHsgZnJhZ21lbnQ6IHN0cmluZzsgdGl0bGU6IHN0cmluZyB9W107XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3JwYmotcGFnZS1oZWFkZXInLFxyXG4gIHN0YW5kYWxvbmU6IHRydWUsXHJcbiAgaW1wb3J0czogW1JvdXRlckxpbmtdLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIGhvc3Q6IHtcclxuICAgIGNsYXNzOiAnZC1ibG9jaycsXHJcbiAgfSxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPGgyIFtpZF09XCJmcmFnbWVudFwiPlxyXG4gICAgICA8YSBjbGFzcz1cInRpdGxlLWZyYWdtZW50XCIgcm91dGVyTGluaz1cIi5cIiBbZnJhZ21lbnRdPVwiZnJhZ21lbnRcIj5cclxuICAgICAgICA8aVxyXG4gICAgICAgICAgY2xhc3M9XCJiaSBiaS1saW5rLTQ1ZGVnXCJcclxuICAgICAgICAgIHN0eWxlPVwiZm9udC1zaXplOiAxLjc1cmVtOyBjb2xvcjogdmFyKC0tYnMtaGVhZGluZy1jb2xvcilcIlxyXG4gICAgICAgID48L2k+XHJcbiAgICAgIDwvYT5cclxuICAgICAge3sgdGl0bGUgfX1cclxuICAgIDwvaDI+XHJcbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgYCxcclxufSlcclxuZXhwb3J0IGNsYXNzIFBhZ2VIZWFkZXJDb21wb25lbnQge1xyXG4gIEBJbnB1dCgpIGZyYWdtZW50ITogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHRpdGxlITogc3RyaW5nO1xyXG59XHJcbiJdfQ==