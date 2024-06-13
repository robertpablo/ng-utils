import {
  AfterViewInit,
  Component,
  ContentChildren,
  Input,
  NgZone,
  QueryList,
  inject,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  NgbCollapseModule,
  NgbDropdownModule,
  NgbScrollSpyModule,
  NgbScrollSpyService,
} from '@ng-bootstrap/ng-bootstrap';
import { PageHeaderComponent, TableOfContents } from '../page-header.component';

@Component({
  selector: 'rpbj-page-wrapper',
  standalone: true,
  imports: [
    NgbCollapseModule,
    NgbDropdownModule,
    NgbScrollSpyModule,
    RouterLink,
  ],
  templateUrl: './page-wrapper.component.html',
})
export class RpbjPageWrapperComponent implements AfterViewInit {
  @Input() pageTitle!: string;

  @ContentChildren(PageHeaderComponent)
  private _tableOfContents!: QueryList<PageHeaderComponent>;

  sidebarCollapsed = true;
  isLargeScreenOrLess: boolean;

  private _scrollSpy = inject(NgbScrollSpyService);

  constructor(ngZone: NgZone) {
    const largeScreenQL = matchMedia('(max-width: 1199.98px)');
    this.isLargeScreenOrLess = largeScreenQL.matches;
    largeScreenQL.addListener((event) =>
      ngZone.run(() => (this.isLargeScreenOrLess = event.matches))
    );
  }

  ngAfterViewInit() {
    this._scrollSpy.start({
      fragments: this.tableOfContents.map(({ fragment }) => fragment),
    });
  }

  get tableOfContents(): TableOfContents {
    return this._tableOfContents ? this._tableOfContents.toArray() : [];
  }
}
