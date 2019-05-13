import {Component} from '@angular/core';
import {IResort} from '../../models/models';
import {HotelsService} from '../hotels.service';

@Component({
  selector: 'app-resort-info',
  templateUrl: './resort-info.component.html',
  styleUrls: ['./resort-info.component.css'],
})
export class ResortInfoComponent {
  constructor(public hotelsService: HotelsService) {
  }

  get resort(): IResort {
    return this.hotelsService.selectedResort;
  }
}
