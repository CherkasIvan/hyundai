import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NavigationPageRoutingModule } from './navigation-page-routing.module';
import { NavigationComponent } from './navigation.component';

@NgModule({
  declarations: [NavigationComponent],
  imports: [
    CommonModule,
    NavigationPageRoutingModule
  ],
  exports: [NavigationComponent],
  bootstrap:[NavigationComponent]
})
export class NavigationModule {}