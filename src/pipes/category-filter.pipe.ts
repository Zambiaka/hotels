import {Pipe, PipeTransform} from '@angular/core';
import {IResort} from '../models/models';

@Pipe({
  name: 'categoryFilter'
})
export class CategoryFilterPipe implements PipeTransform {

  transform(resorts: IResort[], category: string): any {
    if (!category) {
      return resorts;
    }
    return resorts.filter((resort) => resort.category === category);
  }

}
