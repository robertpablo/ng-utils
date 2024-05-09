import { CommonModule } from '@angular/common';
import * as i0 from '@angular/core';
import { Component, ChangeDetectionStrategy, Input, inject, ContentChildren, Pipe } from '@angular/core';
import * as i1 from '@ng-bootstrap/ng-bootstrap';
import { NgbAccordionModule, NgbScrollSpyService, NgbCollapseModule, NgbDropdownModule, NgbScrollSpyModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterLink } from '@angular/router';

class RpbjFilter {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.7", ngImport: i0, type: RpbjFilter, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.7", type: RpbjFilter, isStandalone: true, selector: "rpbj-filter", ngImport: i0, template: "<div ngbAccordion>\r\n  <div ngbAccordionItem [collapsed]=\"false\">\r\n    <h2 ngbAccordionHeader>\r\n      <button ngbAccordionButton>\r\n        <span class=\"title-group-uppercase\">Filtros de b\u00FAsqueda</span>\r\n      </button>\r\n    </h2>\r\n    <div ngbAccordionCollapse>\r\n      <div ngbAccordionBody>\r\n        <ng-content></ng-content>\r\n\r\n        <div class=\"row gx-2 justify-content-end\">\r\n          <div class=\"col-auto\">\r\n            <button type=\"button\" class=\"btn btn-cancel btn-secondary me-2\">\r\n              <span class=\"feather icon-refresh-ccw\"></span>\r\n              Limpiar\r\n            </button>\r\n\r\n            <button type=\"button\" class=\"btn btn-primary\">\r\n              <span class=\"feather icon-search\"></span>\r\n              Buscar\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n", dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "ngmodule", type: NgbAccordionModule }, { kind: "directive", type: i1.NgbAccordionButton, selector: "button[ngbAccordionButton]" }, { kind: "directive", type: i1.NgbAccordionDirective, selector: "[ngbAccordion]", inputs: ["animation", "closeOthers", "destroyOnHide"], outputs: ["show", "shown", "hide", "hidden"], exportAs: ["ngbAccordion"] }, { kind: "directive", type: i1.NgbAccordionItem, selector: "[ngbAccordionItem]", inputs: ["ngbAccordionItem", "destroyOnHide", "disabled", "collapsed"], outputs: ["show", "shown", "hide", "hidden"], exportAs: ["ngbAccordionItem"] }, { kind: "directive", type: i1.NgbAccordionHeader, selector: "[ngbAccordionHeader]" }, { kind: "directive", type: i1.NgbAccordionBody, selector: "[ngbAccordionBody]" }, { kind: "directive", type: i1.NgbAccordionCollapse, selector: "[ngbAccordionCollapse]", exportAs: ["ngbAccordionCollapse"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.7", ngImport: i0, type: RpbjFilter, decorators: [{
            type: Component,
            args: [{ selector: 'rpbj-filter', standalone: true, imports: [CommonModule, NgbAccordionModule], template: "<div ngbAccordion>\r\n  <div ngbAccordionItem [collapsed]=\"false\">\r\n    <h2 ngbAccordionHeader>\r\n      <button ngbAccordionButton>\r\n        <span class=\"title-group-uppercase\">Filtros de b\u00FAsqueda</span>\r\n      </button>\r\n    </h2>\r\n    <div ngbAccordionCollapse>\r\n      <div ngbAccordionBody>\r\n        <ng-content></ng-content>\r\n\r\n        <div class=\"row gx-2 justify-content-end\">\r\n          <div class=\"col-auto\">\r\n            <button type=\"button\" class=\"btn btn-cancel btn-secondary me-2\">\r\n              <span class=\"feather icon-refresh-ccw\"></span>\r\n              Limpiar\r\n            </button>\r\n\r\n            <button type=\"button\" class=\"btn btn-primary\">\r\n              <span class=\"feather icon-search\"></span>\r\n              Buscar\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n" }]
        }] });

class PageHeaderComponent {
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

class RpbjPageWrapper {
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

const formatBytesString = (bytes, decimals) => {
    /*if (bytes < 1024) return bytes + " Bytes";
      else if (bytes < 1048576) return (bytes / 1024).toFixed(0) + " KB";
      else if (bytes < 1073741824) return (bytes / 1048576).toFixed(2) + " MB";
      else return (bytes / 1073741824).toFixed(1) + " GB";*/
    if (bytes == 0)
        return '0 Bytes';
    const k = 1024, dm = decimals || 2, sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'], i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
};

class BytesFormatPipe {
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

//export {};

/**
 * Generated bundle index. Do not edit.
 */

export { BytesFormatPipe, RpbjFilter, RpbjPageWrapper, formatBytesString };
//# sourceMappingURL=ropabajo-shared.mjs.map
