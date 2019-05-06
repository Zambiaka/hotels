import { Component } from '@angular/core';
import {IResort} from '../models/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Best Resorts';

  public resort: IResort;

  public setResort(resort: IResort): void {
    this.resort = resort;
  }
}
