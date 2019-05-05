import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';


const modules = [
  CommonModule,
  BrowserAnimationsModule,
  MatGridListModule,
  MatListModule
];

@NgModule({
  imports: modules,
  exports: modules
})

export class MaterialModule {}
