import {Component, EventEmitter, OnInit, Output, TemplateRef, ViewChild} from '@angular/core';
import {IResort} from '../../models/models';
import {getAllResorts} from '../../API/API';

const SELECTED_CLASS = 'selected';

@Component({
  selector: 'app-all-resorts',
  templateUrl: './all-resorts.component.html',
  styleUrls: ['./all-resorts.component.css'],
})
export class AllResortsComponent implements OnInit {
  public resorts: IResort[];
  public activeCategory: string;
  public selectedResort: IResort;

  @Output()
  public setResort: EventEmitter<IResort> = new EventEmitter();
  @Output()
  public categoryUpdated: EventEmitter<IResort> = new EventEmitter();

  ngOnInit() {
    setTimeout(() => {
      this.resorts = getAllResorts() as unknown as IResort[];

      // Set initial selection
      if (this.resorts.length) {
        this.setActiveCategory(this.resorts[0].category);
      }
    }, 1000);
  }

  // Event handlers
  public setActiveCategory(category: string): void {
    this.activeCategory = category;
    this.categoryUpdated.emit(this.selectedResort);

    // Select first result by default
    const firstResort: IResort = this.getFirstFromCategory(category);
    if (firstResort) {
      this.setSelectedResort(firstResort);
    }
  }

  public setSelectedResort(resort: IResort): void {
    this.setResort.emit(resort);
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
