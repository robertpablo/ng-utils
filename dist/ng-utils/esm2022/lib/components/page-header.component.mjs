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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1oZWFkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctdXRpbHMvc3JjL2xpYi9jb21wb25lbnRzL3BhZ2UtaGVhZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0saUJBQWlCLENBQUM7O0FBeUI3QyxNQUFNLE9BQU8sbUJBQW1COzhHQUFuQixtQkFBbUI7a0dBQW5CLG1CQUFtQixtS0FicEI7Ozs7Ozs7Ozs7O0dBV1QsNERBaEJTLFVBQVU7OzJGQWtCVCxtQkFBbUI7a0JBckIvQixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxrQkFBa0I7b0JBQzVCLFVBQVUsRUFBRSxJQUFJO29CQUNoQixPQUFPLEVBQUUsQ0FBQyxVQUFVLENBQUM7b0JBQ3JCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxJQUFJLEVBQUU7d0JBQ0osS0FBSyxFQUFFLFNBQVM7cUJBQ2pCO29CQUNELFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7R0FXVDtpQkFDRjs4QkFFVSxRQUFRO3NCQUFoQixLQUFLO2dCQUNHLEtBQUs7c0JBQWIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlckxpbmsgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuZXhwb3J0IHR5cGUgVGFibGVPZkNvbnRlbnRzID0geyBmcmFnbWVudDogc3RyaW5nOyB0aXRsZTogc3RyaW5nIH1bXTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAncnBiai1wYWdlLWhlYWRlcicsXHJcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcclxuICBpbXBvcnRzOiBbUm91dGVyTGlua10sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgaG9zdDoge1xyXG4gICAgY2xhc3M6ICdkLWJsb2NrJyxcclxuICB9LFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8aDIgW2lkXT1cImZyYWdtZW50XCI+XHJcbiAgICAgIDxhIGNsYXNzPVwidGl0bGUtZnJhZ21lbnRcIiByb3V0ZXJMaW5rPVwiLlwiIFtmcmFnbWVudF09XCJmcmFnbWVudFwiPlxyXG4gICAgICAgIDxpXHJcbiAgICAgICAgICBjbGFzcz1cImJpIGJpLWxpbmstNDVkZWdcIlxyXG4gICAgICAgICAgc3R5bGU9XCJmb250LXNpemU6IDEuNzVyZW07IGNvbG9yOiB2YXIoLS1icy1oZWFkaW5nLWNvbG9yKVwiXHJcbiAgICAgICAgPjwvaT5cclxuICAgICAgPC9hPlxyXG4gICAgICB7eyB0aXRsZSB9fVxyXG4gICAgPC9oMj5cclxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuICBgLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUGFnZUhlYWRlckNvbXBvbmVudCB7XHJcbiAgQElucHV0KCkgZnJhZ21lbnQhOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgdGl0bGUhOiBzdHJpbmc7XHJcbn1cclxuIl19