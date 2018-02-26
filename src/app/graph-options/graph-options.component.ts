import { Component, OnInit } from '@angular/core';
import { SidenavInteractionService } from '../sidenav-interaction.service';
import { Data } from '../data'


@Component({
  selector: 'app-graph-options',
  templateUrl: './graph-options.component.html',
  styleUrls: ['./graph-options.component.scss']
})
export class GraphOptionsComponent implements OnInit {
  private id;
  private res;

  constructor(private service: SidenavInteractionService) {
    this.id = service.entityID;

    let data = new Data();
        data.providerInfo.filter(obj => {
        if(obj.ip == this.id) {
            this.res = obj;
        }
    })
  }

  ngOnInit() {
    let graphModule = require("./graph.js");
    graphModule.drawGraph(this.res);
  }

}
