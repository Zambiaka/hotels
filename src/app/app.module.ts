import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AllResortsComponent} from './all-resorts/all-resorts.component';
import {ResortInfoComponent} from './resort-info/resort-info.component';
import {MaterialModule} from '../modules/material.module';
import {GetCategoriesPipe} from './all-resorts/pipes/get-categories.pipe';
import {CategoryFilterPipe} from './all-resorts/pipes/category-filter.pipe';
import {AppCreateMultipleDirective} from '../shared/directives/createMultiple.directive';
import {SocialComponent} from './social/social.component';
import {HotelsService} from './hotels.service';

@NgModule({
  declarations: [
    AppComponent,
    AllResortsComponent,
    ResortInfoComponent,
    GetCategoriesPipe,
    CategoryFilterPipe,
    AppCreateMultipleDirective,
    SocialComponent,
  ],
  imports: [
    BrowserModule,
    MaterialModule,
  ],
  providers: [HotelsService],
  bootstrap: [AppComponent],
})
export class AppModule {
}
