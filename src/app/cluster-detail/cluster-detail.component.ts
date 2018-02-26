import { Component, OnInit, Input } from '@angular/core';
import { Data } from '../data';

@Component({
  selector: 'app-cluster-detail',
  templateUrl: './cluster-detail.component.html',
  styleUrls: ['./cluster-detail.component.scss']
})
export class ClusterDetailComponent implements OnInit {

  jsModule: any;

  clusterDetails: any;

  @Input()
  id: string;
  
  constructor() { }

  updateChanges() {
    let d: Data = new Data();
    
    d.clusterInfo.filter(obj => {
      console.log(obj.id, this.id);
      if(obj.id == this.id)
        this.clusterDetails = obj;
        // console.log(this.clusterDetails);
    });
  
    
  }

  ngOnInit() {
    this.jsModule = require('./graph.js');
    this.jsModule.drawGraph(this.clusterDetails); 
  }

  ngOnChanges() {
    this.updateChanges();
  }
}
