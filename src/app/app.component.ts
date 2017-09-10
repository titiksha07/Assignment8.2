import { Component,ViewEncapsulation, OnInit } from '@angular/core';

import { CricketerService } from './cricket-service';
import { ICricketList } from './interface';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
  
})

export class AppComponent implements OnInit {
  /**Public variable */
  cricketersArray: ICricketList[] = []
  
  firstName: string;
  lastName: string;
  favShot: string;
  cricketerDetail: ICricketList;

  // Using constructor, call the cricketService.
  // this shorthand syntax automatically creates and
  // initializes a new private member in the class
  constructor(private _cricketService: CricketerService) { }

  ngOnInit() {
    
  }

  /**Add a cricket */
  addCricketer(first, last, shot) {

    this.cricketerDetail = {
      firstName: first,
      lastName: last,
      favShot: shot,
      
    };

    /**Call function from service. */
    this._cricketService.addCricketer(this.cricketerDetail);
    this.cricketersArray = this._cricketService.getCricket();
  }

}

