import {Component} from '@angular/core';
import {HotelsService} from './hotels.service';
import {IResort} from '../models/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public hotelsService: HotelsService) {
  }

  get resort(): IResort {
    return this.hotelsService.selectedResort;
  }
}
