import { Component, OnInit } from '@angular/core';
import { Service, Employee, Statement, Group, Property, DataType, State } from './service.service';

import { Observable } from 'rxjs/Observable';

@Component({
  styleUrls: ['app.component.css'],
  selector: 'demo-app',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {
  groups: Group[];
  properties: Property[];
  datatypes: DataType[];
  getfilterprops: any;
  getfilterdatatypes: any;
  setgroup: any;
  setproperty: any;

  dataSource: Observable<Statement[]>;

  constructor(private service: Service) {
    this.groups = service.getgroups();
    this.properties = service.getproperties();
    this.datatypes = service.getdatatypes();
    let self = this;

    this.getfilterprops = function (options) {
      return {
        store: self.properties,
        filter: options.data ? ["GroupID", "=", options.data.GroupID] : null
      };
    }

    this.getfilterdatatypes = function (options) {
      return {
        store: self.datatypes,
        // filter: options.data ? ["PropertyID", "=", options.data.PropertyID] : null
        filter: function (itemData) {
          return itemData.PropertyID == 2;
        }
      };
    }

    this.setgroup = function (rowData: any, value: any) {
      if (value) {
        rowData.PropertyID = null;
        rowData.DataTypeID = null;
        (<any>this).defaultSetCellValue(rowData, value);
      }
    }

    this.setproperty = function (rowData: any, value: any) {
      if (value) {
        rowData.DataTypeID = null;
        (<any>this).defaultSetCellValue(rowData, value);
      }
    }
  }

  ngOnInit() {
    this.dataSource = this.service.statements;
  }
}

