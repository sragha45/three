import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { SidenavInteractionService } from '../sidenav-interaction.service';
import { Data } from '../data';


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {

  clusters: any;

  constructor(private service : SidenavInteractionService) { let data: Data = new Data(); this.clusters = data.sideNavTreeView; }
  
  clusterSelected(event, str) {
    this.service.entityID = str.clusterName;
    this.service.eventNotifier.emit('Cluster');
  }

  hostSelected(event, str) {
    
    this.service.entityID = str.hostName;
    this.service.eventNotifier.emit(str.isProvider ? "Provider" : "Consumer");
  }

  vmSelected(event, str) {
    this.service.entityID = str;
    this.service.eventNotifier.emit("VM");
  }
  

  
  ngOnInit() {
  }

}
