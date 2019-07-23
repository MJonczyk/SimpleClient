import { NgModule } from '@angular/core';
import { MatTabsModule, MatListModule, MatDividerModule, MatToolbarModule } from '@angular/material';

@NgModule(
  {
    imports: [ MatTabsModule, MatListModule, MatDividerModule, MatToolbarModule ],
    exports: [ MatTabsModule, MatListModule, MatDividerModule, MatToolbarModule ],
  }
)
export class MaterialModule {}
