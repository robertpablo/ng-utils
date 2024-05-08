import * as i0 from '@angular/core';
import { Pipe, Component, ChangeDetectionStrategy, Input, inject, ContentChildren, LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import * as i1 from '@ng-bootstrap/ng-bootstrap';
import { NgbScrollSpyService, NgbCollapseModule, NgbDropdownModule, NgbScrollSpyModule, NgbAccordionModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import '@angular/common/locales/global/es-PE';
import { RouterLink, RouterModule } from '@angular/router';
import { __decorate } from 'tslib';
import { Action, Selector, State } from '@ngxs/store';

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
        // eslint-disable-next-line deprecation/deprecation
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
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.3.7", type: RpbjPageWrapper, isStandalone: true, selector: "rpbj-page-wrapper", inputs: { pageTitle: "pageTitle" }, queries: [{ propertyName: "_tableOfContents", predicate: PageHeaderComponent }], ngImport: i0, template: "<div class=\"container-fluid\">\r\n  <div class=\"row flex-xl-nowrap\">\r\n    <div class=\"col-12 col-lg-2 border-end\"></div>\r\n    <div class=\"col-12 col-lg-10\">\r\n      <header\r\n        class=\"bg-body-tertiary pt-4 pb-md-5 px-4 px-lg-5 d-flex d-md-block align-items-center title\"\r\n      >\r\n        <h1 class=\"mt-0\">{{ pageTitle }}</h1>\r\n\r\n        <ul\r\n          class=\"nav nav-tabs px-4 px-lg-5 content-tabset justify-content-md-start justify-content-end\"\r\n        >\r\n          @if (tableOfContents.length && isLargeScreenOrLess) {\r\n          <li\r\n            ngbDropdown\r\n            placement=\"bottom-right\"\r\n            class=\"nav-item align-self-center ms-0 ms-md-auto navigation-dropdown\"\r\n          >\r\n            <span ngbDropdownToggle class=\"nav-link\" title=\"Table of contents\">\r\n              <span class=\"visually-hidden\">Table of content</span>\r\n              <svg\r\n                aria-hidden=\"true\"\r\n                role=\"img\"\r\n                xmlns=\"http://www.w3.org/2000/svg\"\r\n                viewBox=\"0 0 512 512\"\r\n              >\r\n                <path\r\n                  fill=\"currentColor\"\r\n                  d=\"M464 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zm-6 400H54a6 6 0 0 1-6-6V86a6 6 0 0 1 6-6h404a6 6 0 0 1 6 6v340a6 6 0 0 1-6 6zm-42-92v24c0 6.627-5.373 12-12 12H204c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h200c6.627 0 12 5.373 12 12zm0-96v24c0 6.627-5.373 12-12 12H204c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h200c6.627 0 12 5.373 12 12zm0-96v24c0 6.627-5.373 12-12 12H204c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h200c6.627 0 12 5.373 12 12zm-252 12c0 19.882-16.118 36-36 36s-36-16.118-36-36 16.118-36 36-36 36 16.118 36 36zm0 96c0 19.882-16.118 36-36 36s-36-16.118-36-36 16.118-36 36-36 36 16.118 36 36zm0 96c0 19.882-16.118 36-36 36s-36-16.118-36-36 16.118-36 36-36 36 16.118 36 36z\"\r\n                ></path>\r\n              </svg>\r\n            </span>\r\n\r\n            <div class=\"dropdown-menu-end\" ngbDropdownMenu>\r\n              @for (topic of tableOfContents; track topic) {\r\n              <a\r\n                class=\"dropdown-item\"\r\n                routerLink=\".\"\r\n                [fragment]=\"topic.fragment\"\r\n                >{{ topic.title }}</a\r\n              >\r\n              }\r\n            </div>\r\n          </li>\r\n          }\r\n        </ul>\r\n      </header>\r\n\r\n      <section class=\"row py-5 px-2 px-md-4 px-lg-5\">\r\n        <div class=\"col-12 col-xl-11 px-md-0 pe-xl-4\">\r\n          <ng-content></ng-content>\r\n        </div>\r\n\r\n        <div class=\"col-12 col-xl-1 d-none d-xl-block contextual-nav\">\r\n          <ul class=\"nav flex-column text-muted pt-4\">\r\n            @for (topic of tableOfContents; track topic) {\r\n            <li class=\"nav-item\">\r\n              <a\r\n                [id]=\"topic.fragment\"\r\n                ngbScrollSpyItem\r\n                class=\"nav-link\"\r\n                routerLink=\".\"\r\n                [fragment]=\"topic.fragment\"\r\n              >\r\n                {{ topic.title }}\r\n              </a>\r\n            </li>\r\n            }\r\n          </ul>\r\n        </div>\r\n      </section>\r\n    </div>\r\n  </div>\r\n</div>\r\n", dependencies: [{ kind: "ngmodule", type: NgbCollapseModule }, { kind: "ngmodule", type: NgbDropdownModule }, { kind: "directive", type: i1.NgbDropdown, selector: "[ngbDropdown]", inputs: ["autoClose", "dropdownClass", "open", "placement", "popperOptions", "container", "display"], outputs: ["openChange"], exportAs: ["ngbDropdown"] }, { kind: "directive", type: i1.NgbDropdownToggle, selector: "[ngbDropdownToggle]" }, { kind: "directive", type: i1.NgbDropdownMenu, selector: "[ngbDropdownMenu]" }, { kind: "ngmodule", type: NgbScrollSpyModule }, { kind: "directive", type: i1.NgbScrollSpyItem, selector: "[ngbScrollSpyItem]", inputs: ["ngbScrollSpyItem", "fragment", "parent"], exportAs: ["ngbScrollSpyItem"] }, { kind: "directive", type: RouterLink, selector: "[routerLink]", inputs: ["target", "queryParams", "fragment", "queryParamsHandling", "state", "info", "relativeTo", "preserveFragment", "skipLocationChange", "replaceUrl", "routerLink"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.7", ngImport: i0, type: RpbjPageWrapper, decorators: [{
            type: Component,
            args: [{ selector: 'rpbj-page-wrapper', standalone: true, imports: [
                        NgbCollapseModule,
                        NgbDropdownModule,
                        NgbScrollSpyModule,
                        RouterLink,
                    ], template: "<div class=\"container-fluid\">\r\n  <div class=\"row flex-xl-nowrap\">\r\n    <div class=\"col-12 col-lg-2 border-end\"></div>\r\n    <div class=\"col-12 col-lg-10\">\r\n      <header\r\n        class=\"bg-body-tertiary pt-4 pb-md-5 px-4 px-lg-5 d-flex d-md-block align-items-center title\"\r\n      >\r\n        <h1 class=\"mt-0\">{{ pageTitle }}</h1>\r\n\r\n        <ul\r\n          class=\"nav nav-tabs px-4 px-lg-5 content-tabset justify-content-md-start justify-content-end\"\r\n        >\r\n          @if (tableOfContents.length && isLargeScreenOrLess) {\r\n          <li\r\n            ngbDropdown\r\n            placement=\"bottom-right\"\r\n            class=\"nav-item align-self-center ms-0 ms-md-auto navigation-dropdown\"\r\n          >\r\n            <span ngbDropdownToggle class=\"nav-link\" title=\"Table of contents\">\r\n              <span class=\"visually-hidden\">Table of content</span>\r\n              <svg\r\n                aria-hidden=\"true\"\r\n                role=\"img\"\r\n                xmlns=\"http://www.w3.org/2000/svg\"\r\n                viewBox=\"0 0 512 512\"\r\n              >\r\n                <path\r\n                  fill=\"currentColor\"\r\n                  d=\"M464 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zm-6 400H54a6 6 0 0 1-6-6V86a6 6 0 0 1 6-6h404a6 6 0 0 1 6 6v340a6 6 0 0 1-6 6zm-42-92v24c0 6.627-5.373 12-12 12H204c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h200c6.627 0 12 5.373 12 12zm0-96v24c0 6.627-5.373 12-12 12H204c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h200c6.627 0 12 5.373 12 12zm0-96v24c0 6.627-5.373 12-12 12H204c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h200c6.627 0 12 5.373 12 12zm-252 12c0 19.882-16.118 36-36 36s-36-16.118-36-36 16.118-36 36-36 36 16.118 36 36zm0 96c0 19.882-16.118 36-36 36s-36-16.118-36-36 16.118-36 36-36 36 16.118 36 36zm0 96c0 19.882-16.118 36-36 36s-36-16.118-36-36 16.118-36 36-36 36 16.118 36 36z\"\r\n                ></path>\r\n              </svg>\r\n            </span>\r\n\r\n            <div class=\"dropdown-menu-end\" ngbDropdownMenu>\r\n              @for (topic of tableOfContents; track topic) {\r\n              <a\r\n                class=\"dropdown-item\"\r\n                routerLink=\".\"\r\n                [fragment]=\"topic.fragment\"\r\n                >{{ topic.title }}</a\r\n              >\r\n              }\r\n            </div>\r\n          </li>\r\n          }\r\n        </ul>\r\n      </header>\r\n\r\n      <section class=\"row py-5 px-2 px-md-4 px-lg-5\">\r\n        <div class=\"col-12 col-xl-11 px-md-0 pe-xl-4\">\r\n          <ng-content></ng-content>\r\n        </div>\r\n\r\n        <div class=\"col-12 col-xl-1 d-none d-xl-block contextual-nav\">\r\n          <ul class=\"nav flex-column text-muted pt-4\">\r\n            @for (topic of tableOfContents; track topic) {\r\n            <li class=\"nav-item\">\r\n              <a\r\n                [id]=\"topic.fragment\"\r\n                ngbScrollSpyItem\r\n                class=\"nav-link\"\r\n                routerLink=\".\"\r\n                [fragment]=\"topic.fragment\"\r\n              >\r\n                {{ topic.title }}\r\n              </a>\r\n            </li>\r\n            }\r\n          </ul>\r\n        </div>\r\n      </section>\r\n    </div>\r\n  </div>\r\n</div>\r\n" }]
        }], ctorParameters: () => [{ type: i0.NgZone }], propDecorators: { pageTitle: [{
                type: Input
            }], _tableOfContents: [{
                type: ContentChildren,
                args: [PageHeaderComponent]
            }] } });

class RpbjFilter {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.7", ngImport: i0, type: RpbjFilter, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.7", type: RpbjFilter, isStandalone: true, selector: "rpbj-filter", ngImport: i0, template: "<div ngbAccordion>\r\n  <div ngbAccordionItem [collapsed]=\"false\">\r\n    <h2 ngbAccordionHeader>\r\n      <button ngbAccordionButton>\r\n        <span class=\"title-group-uppercase\">Filtros de b\u00FAsqueda</span>\r\n      </button>\r\n    </h2>\r\n    <div ngbAccordionCollapse>\r\n      <div ngbAccordionBody>\r\n        <ng-content></ng-content>\r\n\r\n        <div class=\"row gx-2 justify-content-end\">\r\n          <div class=\"col-auto\">\r\n            <button type=\"button\" class=\"btn btn-cancel btn-secondary me-2\">\r\n              <span class=\"feather icon-refresh-ccw\"></span>\r\n              Limpiar\r\n            </button>\r\n\r\n            <button type=\"button\" class=\"btn btn-primary\">\r\n              <span class=\"feather icon-search\"></span>\r\n              Buscar\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n", dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "ngmodule", type: NgbAccordionModule }, { kind: "directive", type: i1.NgbAccordionButton, selector: "button[ngbAccordionButton]" }, { kind: "directive", type: i1.NgbAccordionDirective, selector: "[ngbAccordion]", inputs: ["animation", "closeOthers", "destroyOnHide"], outputs: ["show", "shown", "hide", "hidden"], exportAs: ["ngbAccordion"] }, { kind: "directive", type: i1.NgbAccordionItem, selector: "[ngbAccordionItem]", inputs: ["ngbAccordionItem", "destroyOnHide", "disabled", "collapsed"], outputs: ["show", "shown", "hide", "hidden"], exportAs: ["ngbAccordionItem"] }, { kind: "directive", type: i1.NgbAccordionHeader, selector: "[ngbAccordionHeader]" }, { kind: "directive", type: i1.NgbAccordionBody, selector: "[ngbAccordionBody]" }, { kind: "directive", type: i1.NgbAccordionCollapse, selector: "[ngbAccordionCollapse]", exportAs: ["ngbAccordionCollapse"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.7", ngImport: i0, type: RpbjFilter, decorators: [{
            type: Component,
            args: [{ selector: 'rpbj-filter', standalone: true, imports: [CommonModule, NgbAccordionModule], template: "<div ngbAccordion>\r\n  <div ngbAccordionItem [collapsed]=\"false\">\r\n    <h2 ngbAccordionHeader>\r\n      <button ngbAccordionButton>\r\n        <span class=\"title-group-uppercase\">Filtros de b\u00FAsqueda</span>\r\n      </button>\r\n    </h2>\r\n    <div ngbAccordionCollapse>\r\n      <div ngbAccordionBody>\r\n        <ng-content></ng-content>\r\n\r\n        <div class=\"row gx-2 justify-content-end\">\r\n          <div class=\"col-auto\">\r\n            <button type=\"button\" class=\"btn btn-cancel btn-secondary me-2\">\r\n              <span class=\"feather icon-refresh-ccw\"></span>\r\n              Limpiar\r\n            </button>\r\n\r\n            <button type=\"button\" class=\"btn btn-primary\">\r\n              <span class=\"feather icon-search\"></span>\r\n              Buscar\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n" }]
        }] });

class CoreModule {
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

// actions/app.actions.ts
class SetLoading {
    static { this.type = '[App] Set Loading'; }
    constructor(payload) {
        this.payload = payload;
    }
}
class SetTitle {
    static { this.type = '[App] Set Title'; }
    constructor(payload) {
        this.payload = payload;
    }
}

let AppState = class AppState {
    // Selectors
    static isLoading(state) {
        return state.loading;
    }
    static title(state) {
        return state.title;
    }
    // Actions
    setLoading(ctx, action) {
        const state = ctx.getState();
        ctx.setState({
            ...state,
            loading: action.payload,
        });
    }
    setTitle(ctx, action) {
        const state = ctx.getState();
        ctx.setState({
            ...state,
            title: action.payload,
        });
    }
};
__decorate([
    Action(SetLoading)
], AppState.prototype, "setLoading", null);
__decorate([
    Action(SetTitle)
], AppState.prototype, "setTitle", null);
__decorate([
    Selector()
], AppState, "isLoading", null);
__decorate([
    Selector()
], AppState, "title", null);
AppState = __decorate([
    State({
        name: 'app',
        defaults: {
            loading: false,
            title: 'Bulk Load App',
        },
    })
], AppState);

/**
 * Generated bundle index. Do not edit.
 */

export { AppState, BytesFormatPipe, CoreModule, PageHeaderComponent, RpbjFilter, RpbjPageWrapper, formatBytesString };
//# sourceMappingURL=ropabajo-core.mjs.map
