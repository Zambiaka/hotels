import {Component, Input, OnInit} from '@angular/core';
import {IResort} from '../../models/models';

@Component({
  selector: 'app-resort-info',
  templateUrl: './resort-info.component.html',
  styleUrls: ['./resort-info.component.css'],
})
export class ResortInfoComponent implements OnInit {

  @Input('resort')
  public resort: IResort;

  ngOnInit() {
  }
}
