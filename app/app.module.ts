import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component';

import { DxDataGridModule, DxButtonModule } from 'devextreme-angular';
import { Service } from './service.service';

@NgModule({
    imports: [
        BrowserModule,
        DxDataGridModule,
        DxButtonModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: [Service]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);