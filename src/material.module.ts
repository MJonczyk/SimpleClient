import { NgModule } from '@angular/core';
import { MatTabsModule, MatListModule, MatDividerModule, MatToolbarModule, MatGridListModule, MatButtonModule, MatCardModule } from '@angular/material';

@NgModule(
  {
    imports: [ MatTabsModule, MatListModule, MatDividerModule, MatToolbarModule, MatGridListModule, MatButtonModule, MatCardModule ],
    exports: [ MatTabsModule, MatListModule, MatDividerModule, MatToolbarModule, MatGridListModule, MatButtonModule, MatCardModule ],
  }
)
export class MaterialModule {}
