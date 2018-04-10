import { Component, OnInit, Input } from '@angular/core';
import { Data } from '../data';
import { FetchRemoteDataService } from '../fetch-remote-data.service';

@Component({
  selector: 'app-cluster-detail',
  templateUrl: './cluster-detail.component.html',
  styleUrls: ['./cluster-detail.component.scss'],
  providers: [ FetchRemoteDataService ]
  
})
export class ClusterDetailComponent implements OnInit {

  jsModule: any;
  d: Data;

  clusterDetails: any;

  @Input()
  id: string;
  
  constructor(private fetchRemoteDataService: FetchRemoteDataService) {
    this.d = new Data();
    this.fetchRemoteDataService.getData("sidenav").subscribe(data => {
      // console.log(data);
      this.d.loadClusterInfo(data);
      this.updateChanges();
      this.jsModule.drawGraph(this.clusterDetails); 
    })
  }

  updateChanges() {
    this.d.clusterInfo.filter(obj => {
      console.log(obj.id, this.id);
      if(obj.id == this.id)
        this.clusterDetails = obj;
        // console.log(this.clusterDetails);
    });
  
    
  }

  ngOnInit() {
    this.jsModule = require('./graph.js');
  }

  ngOnChanges() {
    this.updateChanges();
  }
}
