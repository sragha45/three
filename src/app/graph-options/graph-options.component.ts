import { Component, OnInit } from '@angular/core';
import { SidenavInteractionService } from '../sidenav-interaction.service';
import { Data } from '../data'
import { FetchRemoteDataService } from '../fetch-remote-data.service';


@Component({
  selector: 'app-graph-options',
  templateUrl: './graph-options.component.html',
  styleUrls: ['./graph-options.component.scss'],
  providers: [FetchRemoteDataService]
})
export class GraphOptionsComponent implements OnInit {
  private id;
  private res;

  constructor(private service: SidenavInteractionService,
    private remoteService: FetchRemoteDataService) {
    this.id = service.entityID;

    this.remoteService.getProviderInfo(this.id).subscribe(providerInfo => {
      // console.log(providerInfo);
      let graphModule = require("./graph.js");

      providerInfo.filter(obj => {
        if (obj.ip == this.id) {
          graphModule.drawGraph(obj);
        }
      })
    });

    // let data = new Data();
    //     data.providerInfo.filter(obj => {
    //     if(obj.ip == this.id) {
    //         this.res = obj;
    //     }
    // })
  }

  ngOnInit() {

  }

}
