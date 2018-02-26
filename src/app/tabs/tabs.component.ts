import { Component, OnInit } from '@angular/core';
import { SidenavInteractionService } from '../sidenav-interaction.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {
  context: string;
  ip: string;
  componentsVisible: boolean = false;

  constructor(private service: SidenavInteractionService) {

  }

  ngOnInit() {
    this.service.eventNotifier.subscribe(context => { this.context = context; this.refreshComponent();   })
  }

  refreshComponent() {
    this.componentsVisible = false;
    setTimeout(() => {
      this.componentsVisible = true;
    }, 1);
  }

}
