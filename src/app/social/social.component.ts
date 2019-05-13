import {Component} from '@angular/core';
import {IResort} from '../../models/models';
import {HotelsService} from '../hotels.service';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})
export class SocialComponent {
  constructor(public hotelsService: HotelsService) {
  }

  get resort(): IResort {
    return this.hotelsService.selectedResort;
  }
}
