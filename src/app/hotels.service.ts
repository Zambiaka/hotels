import {Injectable} from '@angular/core';
import {IResort} from '../models/models';
import {getAllResorts} from '../API/API';


@Injectable({
  providedIn: 'root'
})


export class HotelsService {
  public selectedResort: IResort;

  public getResorts(): IResort[] {
    return getAllResorts() as unknown as IResort[];
  }
}


