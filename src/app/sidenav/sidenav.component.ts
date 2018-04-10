import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { SidenavInteractionService } from '../sidenav-interaction.service';
import { Data } from '../data';
import { FetchRemoteDataService } from '../fetch-remote-data.service';
import { ClusterInfoType } from '../data_structure';
import { TableDataService } from '../table-data.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  providers: [ FetchRemoteDataService, TableDataService ]
})
export class SidenavComponent implements OnInit {

  clusters = {};
  infoObj: ClusterInfoType[];

  constructor(private sidenavService : SidenavInteractionService,
              private fetchRemoteDataService: FetchRemoteDataService,
              private tableDataService: TableDataService) { 
    this.fetchRemoteDataService.getData("sidenav").subscribe(data => {
      this.infoObj = data;
      this.parseData();
    });
    
    // this.clusters = data.sideNavTreeView; 

    
  }
  
  parseData() {
    this.clusters['expanded'] = false;
    this.clusters['clustersInfo'] = [];

    
    for(let obj of this.infoObj) {
      let clusterInfo = {};
      clusterInfo['clusterName'] = obj.clusterName;
      clusterInfo['showChild'] = false;
      
      let hosts = [];

       
      for(let host of obj.consumerNames) {
        let hostInfo = {};
        hostInfo['hostName'] = host;
        hostInfo['isProvider'] = false;
        hostInfo['showVM'] = false;
        this.tableDataService.getVMList(host).subscribe(vm => {
          console.log(vm);
          hostInfo['vmList'] = vm.vmList; 
        });
        
        hosts.push(hostInfo);
      }

      for(let host of obj.providerNames) {
        let hostInfo = {};
        hostInfo['hostName'] = host;
        hostInfo['isProvider'] = true;
        hostInfo['showVM'] = false;
        hostInfo['vmList'] = [];
        hosts.push(hostInfo);
      }
      clusterInfo['hosts'] = hosts;
      this.clusters['clustersInfo'].push(clusterInfo);
    }
   console.log(this.clusters);
  }

  clusterSelected(event, str) {
    this.sidenavService.entityID = str.clusterName;
    this.sidenavService.eventNotifier.emit('Cluster');
  }

  hostSelected(event, str) {
    this.sidenavService.entityID = str.hostName;
    this.sidenavService.eventNotifier.emit(str.isProvider ? "Provider" : "Consumer");
  }

  vmSelected(event, str) {
    this.sidenavService.entityID = str;
    this.sidenavService.eventNotifier.emit("VM");
  }
  

  
  ngOnInit() {
  }

}
