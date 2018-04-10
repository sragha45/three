import { Component, OnInit, Input } from '@angular/core';
import { Data } from '../data';
import { TableDataService } from '../table-data.service';
import { FetchRemoteDataService } from '../fetch-remote-data.service';

@Component({
  selector: 'app-datagrid',
  templateUrl: './datagrid.component.html',
  styleUrls: ['./datagrid.component.scss'],
  providers: [ TableDataService, FetchRemoteDataService ]
})
export class DatagridComponent implements OnInit {

  vmData: any;
  latencyStats: any;

  @Input()
  ip: any;      // Consumer or Provider's IP

  vmlist = [];
  vmDetails = {};
  interval: any;
  pmemStatsInfo: any;
  providerList;
  tableExpanded: boolean = false;


  constructor(private tableDataService: TableDataService,
              private remoteService: FetchRemoteDataService) {
    
  }

  ngOnInit() {
    this.interval = setInterval(() => {
      this.valueUpdated();
    }, 15000);
  }

  valueUpdated() {
    
    this.tableDataService.getVMList(this.ip).subscribe(data => {
      this.vmlist = data.vmList;
    })
    
    this.tableDataService.getLatencyStats(this.ip).subscribe(data => {
      this.latencyStats = data;
    })

    this.tableDataService.getvmAUsInfo(this.ip).subscribe(data => {
      this.vmDetails = data;
    })

    this.tableDataService.getpmemStatsInfo(this.ip).subscribe(data => {
      this.pmemStatsInfo = data;
    })

    this.tableDataService.getProviderList(this.ip).subscribe(data => {
      this.providerList = data;
      this.fillConsumerInfo(this.ip, this.vmlist, this.vmDetails, this.latencyStats, this.pmemStatsInfo, this.providerList);      
    })
      
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  public fillConsumerInfo(ip, vmlist, vmDetails, latencyStats, pmemStatsInfo, providerList) {
    // console.log(ip);
    // console.log(vmlist);
    // console.log(vmDetails);
    // console.log(latencyStats);
    // console.log(pmemStatsInfo);
    // console.log(providerList);

    Data.consumerInfoTest['ip'] = ip;
    Data.consumerInfoTest['vmInfo'] = []
    let vmInfo = {}
    vmInfo['serverDetails'] = []
    for(let vm of vmlist) {
        vmInfo['id'] = vm;
        vmInfo['read'] = latencyStats[vm].stats.noOfFaults;
        vmInfo['write'] = latencyStats[vm].stats.noOfSwapOuts;
        vmInfo['localMemory'] = latencyStats[vm].localMem;              // Change this later.
        vmInfo['remoteMemory'] = vmDetails[vm].vmAUsInfo.length * 256 
        vmInfo['latency'] = Math.round(latencyStats[vm].stats.totalTimeOfFaults / 
                            latencyStats[vm].stats.noOfFaults) / 1000000;
        
        let serverDetails = {}
        for(let provider of providerList[vm].vmChannelInfo) {
          serverDetails['ip'] = provider.ipAddress;
          
          this.remoteService.getProviderInfo(provider.ipAddress).subscribe(providerInfo => {
            // console.log(providerInfo);
            serverDetails['contribution'] = providerInfo.memoryContributed;
          })

          this.tableDataService.getpmemStatsInfo(provider.ipAddress).subscribe(data => {
            console.log(data);
            serverDetails['read'] = 0;
            serverDetails['write'] = 0; 
            for(let x of data[0][vm].pmemStatsInfo) {
              serverDetails['read'] += x.noOfReads;
              serverDetails['write'] += x.noOfWrites;
            }
          })

          this.tableDataService.getLatencyStats(provider.ipAddress).subscribe(data => {
            // console.log(data[vm]);
            serverDetails['latency'] = data[vm].stats.totalTimeOfFaults + 
                                       data[vm].stats.totalTimeOfSwapOuts;
          })
        }
        vmInfo['serverDetails'].push(serverDetails); 
    }
    Data.consumerInfoTest['vmInfo'].push(vmInfo);
    this.vmData = Data.consumerInfoTest["vmInfo"];
    console.log(Data.consumerInfoTest);
  }


  

  ngOnChanges() {
    this.valueUpdated();
    // clearInterval(this.interval);
  }
}
