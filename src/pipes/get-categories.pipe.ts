import { Pipe, PipeTransform } from '@angular/core';
import {IResort} from '../models/models';

@Pipe({
  name: 'getCategories'
})
export class GetCategoriesPipe implements PipeTransform {

  transform(resorts: IResort[]): string[] {
    const categories = new Set(resorts.map(resort => resort.category));
    return Array.from(categories);
  }
}
