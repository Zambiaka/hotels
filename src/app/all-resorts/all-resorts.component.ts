import {Component, OnInit} from '@angular/core';
import {IResort} from '../../models/models';
import {HotelsService} from '../hotels.service';


@Component({
  selector: 'app-all-resorts',
  templateUrl: './all-resorts.component.html',
  styleUrls: ['./all-resorts.component.css'],
})
export class AllResortsComponent implements OnInit {
  public resorts: IResort[];
  public activeCategory: string;

  constructor(public hotelsService: HotelsService) {
  }

  get selectedResort(): IResort {
    return this.hotelsService.selectedResort;
  }

  set selectedResort(value: IResort) {
    this.hotelsService.selectedResort = value;
  }

  ngOnInit() {
    setTimeout(() => {
      this.resorts = this.hotelsService.getResorts();

      // Set initial selection
      if (this.resorts.length) {
        this.setActiveCategory(this.resorts[0].category);
      }
    }, 1000);
  }

  // Event handlers
  public setActiveCategory(category: string): void {
    this.activeCategory = category;

    // Select first result by default
    const firstResort: IResort = this.getFirstFromCategory(category);
    if (firstResort) {
      this.selectedResort = firstResort;
    }
  }

  public setSelectedResort(resort: IResort): void {
    this.selectedResort = resort;
  }

  public isActiveCategory(category: string): boolean {
    return category === this.activeCategory;
  }

  public isSelectedResort(resort: IResort): boolean {
    return resort === this.selectedResort;
  }

  private getFirstFromCategory(category: string): IResort {
    return this.resorts.find((res) => res.category === category);
  }
}
