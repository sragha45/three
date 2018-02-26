import { Component, OnInit, Input } from '@angular/core';
import { Data } from '../data';

@Component({
  selector: 'app-datagrid',
  templateUrl: './datagrid.component.html',
  styleUrls: ['./datagrid.component.scss']
})
export class DatagridComponent implements OnInit {

  vmData: any;

  @Input()
  ip: any;

  constructor() {
    
  }

  ngOnInit() {
  }

  valueUpdated() {
    let d: Data = new Data();
    
    d.consumerInfo.filter(obj => {
      
      if(obj.ip == this.ip)
        this.vmData = obj.vmInfo;
    });
  }



  ngOnChanges() {
    this.valueUpdated();
  }
}
