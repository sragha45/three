import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ClarityModule } from '@clr/angular';
import { AppComponent } from './app.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { TabsComponent } from './tabs/tabs.component';
import { GraphOptionsComponent } from './graph-options/graph-options.component';

import { SidenavInteractionService } from './sidenav-interaction.service';
import { DatagridComponent } from './datagrid/datagrid.component';
import { ClusterDetailComponent } from './cluster-detail/cluster-detail.component';


@NgModule({
    declarations: [
        AppComponent,
        SidenavComponent,
        TabsComponent,
        GraphOptionsComponent,
        DatagridComponent,
        ClusterDetailComponent
    ],
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        FormsModule,
        HttpModule,
        ClarityModule,
    ],
    providers: [SidenavInteractionService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
