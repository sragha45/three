import { Injectable } from '@angular/core';
import { ClusterInfoType } from './data_structure';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';

import 'rxjs/add/operator/map';

@Injectable()
export class FetchRemoteDataService {

  constructor(private http: Http) { 
    
  }

  apiURL = "http://10.172.209.108:5000";

  getData(path: string): Observable<ClusterInfoType[]> {
    let apiURLPath = this.apiURL + "/sidenav";
    return this.http.get(apiURLPath)
    .map(res => {
       return res.json()
       .map(item => {
        return new ClusterInfoType(
          item.clusterName,
          item.consumerNames,
          item.memoryConsumed,
          item.memoryContributed,
          item.providerNames
        );
      });
    });
  }

  getProviderInfo(path: string): Observable<any> {
    let apiURLPath = this.apiURL + "/providerInfo/" + path;
    return this.http.get(apiURLPath)
    .map(res => {
      return res.json();
    });
  }

  getAllVMs(path: string): Observable<any> {
    let apiURLPath = this.apiURL + "/vmInfo/" + path;       // Should later be replaced with the consumer IP
    console.log(apiURLPath);
    return this.http.get(apiURLPath)
    .map(res => {
      return res.json();
    });
  }
}
