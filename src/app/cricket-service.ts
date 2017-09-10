import { Injectable } from '@angular/core';
import { ICricketList } from './interface';

@Injectable()
export class CricketerService {

  cricketersList: ICricketList[] = [];

  /** Add cricketer in the array List. */
  addCricketer(cricketerDetail: ICricketList) {
    this.cricketersList.unshift(cricketerDetail);
  }

  /**Get the cricket list from the array. */
  getCricket(): ICricketList[] {
    return this.cricketersList;
  }


}