import {Component, OnInit, Input} from '@angular/core';
import {IResort} from '../../models/models';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})
export class SocialComponent implements OnInit {

  @Input('resort')
  public resort: IResort;

  ngOnInit() {
  }

}
