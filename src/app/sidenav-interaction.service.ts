import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class SidenavInteractionService {

  eventNotifier: EventEmitter<string> = new EventEmitter(); 
  
  entityID: string;
  
  constructor() { }

}
