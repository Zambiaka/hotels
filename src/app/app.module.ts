import {BrowserModule} from '@angular/platform-browser';
import {NgModule, OnInit} from '@angular/core';

import {AppComponent} from './app.component';
import {AllResortsComponent} from './all-resorts/all-resorts.component';
import {ResortInfoComponent} from './resort-info/resort-info.component';
import {MaterialModule} from '../modules/material.module';
import {GetCategoriesPipe} from '../pipes/get-categories.pipe';
import {IResort} from '../models/models';
import {getAllResorts} from '../API/API';
import { CategoryFilterPipe } from '../pipes/category-filter.pipe';
import { AppCreateMultipleDirective } from '../directives/createMultiple.directive';

@NgModule({
  declarations: [
    AppComponent,
    AllResortsComponent,
    ResortInfoComponent,
    GetCategoriesPipe,
    CategoryFilterPipe,
    AppCreateMultipleDirective,
  ],
  imports: [
    BrowserModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule implements OnInit {
  public resorts: IResort[];

  ngOnInit(): void {
    this.resorts = getAllResorts() as unknown as IResort[];
  }

}
