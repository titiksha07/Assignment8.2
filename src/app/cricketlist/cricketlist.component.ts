import { ICricketList } from './../interface';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cricketers-list',
  templateUrl: './cricketlist.component.html',
  styleUrls: ['./cricketlist.component.css']
})
export class CricketerComponent implements OnInit {

  /**Get the cricketerDetail from cricketer-app  */
  @Input() criketerDetail;

  criketerList: ICricketList;

  constructor() { }

  ngOnInit() {}

}