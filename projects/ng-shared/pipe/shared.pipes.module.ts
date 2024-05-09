import { NgModule } from '@angular/core';
import { BytesFormatPipe } from './bytes-format.pipe';

@NgModule({
  declarations: [BytesFormatPipe],
  exports: [BytesFormatPipe],
})
export class SharedPipesModule {}
