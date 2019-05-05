import {Component, OnInit} from '@angular/core';
import {IResort} from '../../../models/models';
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
  public activeCategoryEl: HTMLLIElement;

  constructor() {
  }

  ngOnInit() {
    setTimeout(() => {
      this.resorts = getAllResorts() as unknown as IResort[];
    }, 1000);
  }

  public setActiveCategory(target: HTMLLIElement, category: string): void {
    this.setSelected(target);
    this.activeCategory = category;
    console.log(`Active category is ${category}`);
  }

  private setSelected(selectedElement: HTMLLIElement) {
    if (this.activeCategoryEl) {
      this.activeCategoryEl.classList.remove(SELECTED_CLASS);
    }
    selectedElement.classList.add(SELECTED_CLASS);
    this.activeCategoryEl = selectedElement;
  }
}
