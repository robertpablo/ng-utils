import { NgModule } from '@angular/core';
import { ResizeColumnDirective } from './resize-grid-column.directive';

const DIRECTIVAS = [ResizeColumnDirective];

@NgModule({
  declarations: [...DIRECTIVAS],
  exports: [...DIRECTIVAS],
})
export class SharedDirectivesModule {}
