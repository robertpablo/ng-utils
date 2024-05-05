import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import '@angular/common/locales/global/es-PE';
import { RouterModule } from '@angular/router';
import { BytesFormatPipe } from './pipe';
import { RpbjPageWrapper } from './components';

@NgModule({
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
})
export class CoreModule {}
