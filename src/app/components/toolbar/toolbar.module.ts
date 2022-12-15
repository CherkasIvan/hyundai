import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ToolbarComponent } from './toolbar.component';
import { ToolbarNavigationComponent } from './components/toolbar-navigation/toolbar-navigation.component';
import { ToolbarProfileComponent } from './components/toolbar-profile/toolbar-profile.component';

@NgModule({
  declarations: [
    ToolbarComponent,
    ToolbarNavigationComponent,
    ToolbarProfileComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ToolbarComponent, ToolbarNavigationComponent],
  bootstrap:[ToolbarComponent]
})
export class ToolbarModule {}