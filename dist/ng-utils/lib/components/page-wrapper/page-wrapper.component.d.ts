import { AfterViewInit, NgZone } from '@angular/core';
import { TableOfContents } from '../page-header.component';
import * as i0 from "@angular/core";
export declare class RpbjPageWrapper implements AfterViewInit {
    pageTitle: string;
    private _tableOfContents;
    sidebarCollapsed: boolean;
    isLargeScreenOrLess: boolean;
    private _scrollSpy;
    constructor(ngZone: NgZone);
    ngAfterViewInit(): void;
    get tableOfContents(): TableOfContents;
    static ɵfac: i0.ɵɵFactoryDeclaration<RpbjPageWrapper, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RpbjPageWrapper, "rpbj-page-wrapper", never, { "pageTitle": { "alias": "pageTitle"; "required": false; }; }, {}, ["_tableOfContents"], ["*"], true, never>;
}
