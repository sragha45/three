import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http } from '@angular/http';



@Injectable()
export class TableDataService {

  constructor(private http: Http) { }

  apiURL = "http://10.107.44.15:5000/";

  getVMList(consumer_ip): Observable<any> {
    let apiURLPath = this.apiURL + 'vmList/' + consumer_ip;
    return this.http.get(apiURLPath)
    .map(res => {
      return res.json();
    })
  }

  getvmAUsInfo(consumer_ip): Observable<any> {
    let apiURLPath = this.apiURL + 'vmAUsInfo/' + consumer_ip;
    return this.http.get(apiURLPath)
    .map(res => {
      return res.json();
    })
  }

  getpmemStatsInfo(consumer_ip): Observable<any> {
    let apiURLPath = this.apiURL + 'pmemStatsInfo/' + consumer_ip;
    return this.http.get(apiURLPath)
    .map(res => {
      return res.json();
    })
  }

  getLatencyStats(consumer_ip): Observable<any> {
    let apiURLPath = this.apiURL + 'latencyStats/' + consumer_ip;
    return this.http.get(apiURLPath)
    .map(res => {
      return res.json();
    })
  }

  getProviderList(consumer_ip) : Observable<any>{
    let apiURLPath = this.apiURL + 'vmChannelInfo/' + consumer_ip;
    return this.http.get(apiURLPath)
    .map(res => {
      return res.json();
    })
  }
  
}
