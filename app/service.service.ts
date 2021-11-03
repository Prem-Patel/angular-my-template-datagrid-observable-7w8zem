import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { ReplaySubject } from 'rxjs/ReplaySubject';

export class Employee {
  ID: number;
  FirstName: string;
  LastName: string;
  Prefix: string;
  Position: string;
  Picture: string;
  BirthDate: string;
  HireDate: string;
  Notes: string;
  Address: string;
  StateID: number;
}

export class State {
  ID: number;
  Name: string;
}

export class Statement {
  ID: number;
  GroupID: number;
  Name: string;
  PropertyID: number;
  DataTypeID: number;
}

export class Group {
  ID: number;
  Name: string;
}

export class Property {
  ID: number;
  Name: string;
  GroupID: number;
}

export class DataType {
  ID: number;
  Name: string;
  PropertyID: number;
}


let groups: Group[] = [
  {
    "ID": 1,
    "Name": "First Group"
  },
  {
    "ID": 2,
    "Name": "Second Group"
  },
  {
    "ID": 3,
    "Name": "Third Group"
  },
  {
    "ID": 4,
    "Name": "Fourth Group"
  }
];


let properties: Property[] = [
  {
    "ID": 1,
    "Name": "Property G1.1",
    "GroupID": 1
  },
  {
    "ID": 2,
    "Name": "Property G1.2",
    "GroupID": 1
  },
  {
    "ID": 3,
    "Name": "Property G1.3",
    "GroupID": 1
  },
  {
    "ID": 4,
    "Name": "Property G2.1",
    "GroupID": 2
  },
  {
    "ID": 5,
    "Name": "Property G2.2",
    "GroupID": 2
  },
  {
    "ID": 6,
    "Name": "Property G3.1",
    "GroupID": 3
  },
  {
    "ID": 7,
    "Name": "Property G3.2",
    "GroupID": 3
  },
  {
    "ID": 8,
    "Name": "Property G3.3",
    "GroupID": 3
  },
  {
    "ID": 9,
    "Name": "Property G4.1",
    "GroupID": 4
  },
  {
    "ID": 10,
    "Name": "Property G4.2",
    "GroupID": 4
  },
];

let datatypes: DataType[] = [
  {
    "ID": 1,
    "Name": "DataType P1.1",
    "PropertyID": 1
  },
  {
    "ID": 2,
    "Name": "DataType P1.2",
    "PropertyID": 1
  },
  {
    "ID": 3,
    "Name": "DataType P1.3",
    "PropertyID": 1
  },

  {
    "ID": 4,
    "Name": "DataType P2.1",
    "PropertyID": 2
  },
  {
    "ID": 5,
    "Name": "DataType P2.2",
    "PropertyID": 2
  },
  {
    "ID": 6,
    "Name": "DataType P2.3",
    "PropertyID": 2
  },

  {
    "ID": 7,
    "Name": "DataType P3.1",
    "PropertyID": 3
  },
  {
    "ID": 8,
    "Name": "DataType P3.2",
    "PropertyID": 3
  },
  {
    "ID": 9,
    "Name": "DataType P3.3",
    "PropertyID": 3
  },
  {
    "ID": 10,
    "Name": "DataType P4.1",
    "PropertyID": 4
  },
  {
    "ID": 11,
    "Name": "DataType P4.2",
    "PropertyID": 4
  },
  {
    "ID": 12,
    "Name": "DataType P4.3",
    "PropertyID": 4
  },

  {
    "ID": 13,
    "Name": "DataType P5.1",
    "PropertyID": 5
  },
  {
    "ID": 14,
    "Name": "DataType P5.2",
    "PropertyID": 5
  },
  {
    "ID": 15,
    "Name": "DataType P5.3",
    "PropertyID": 5
  },


  {
    "ID": 16,
    "Name": "DataType P6.1",
    "PropertyID": 6
  },
  {
    "ID": 17,
    "Name": "DataType P6.2",
    "PropertyID": 6
  },
  {
    "ID": 18,
    "Name": "DataType P6.3",
    "PropertyID": 6
  },

  {
    "ID": 19,
    "Name": "DataType P7.1",
    "PropertyID": 7
  },
  {
    "ID": 20,
    "Name": "DataType P7.2",
    "PropertyID": 7
  },
  {
    "ID": 21,
    "Name": "DataType P7.3",
    "PropertyID": 7
  },

  {
    "ID": 22,
    "Name": "DataType P8.1",
    "PropertyID": 8
  },
  {
    "ID": 23,
    "Name": "DataType P8.2",
    "PropertyID": 8
  },
  {
    "ID": 24,
    "Name": "DataType P8.3",
    "PropertyID": 8
  },

  {
    "ID": 25,
    "Name": "DataType P9.1",
    "PropertyID": 9
  },
  {
    "ID": 26,
    "Name": "DataType P9.2",
    "PropertyID": 9
  },
  {
    "ID": 27,
    "Name": "DataType P9.3",
    "PropertyID": 9
  },
  {
    "ID": 28,
    "Name": "DataType P10.1",
    "PropertyID": 10
  },
  {
    "ID": 29,
    "Name": "DataType P10.2",
    "PropertyID": 10
  },
  {
    "ID": 30,
    "Name": "DataType P10.3",
    "PropertyID": 10
  }
];


let statements: Statement[] = [
  {
    "ID": 1,
    "Name": "First Stmt",
    "GroupID": 2,
    "PropertyID": 5,
    "DataTypeID": 15
  },
  {
    "ID": 2,
    "Name": "Second Stmt",
    "GroupID": 4,
    "PropertyID": 10,
    "DataTypeID": 29
  },
  {
    "ID": 3,
    "Name": "Third Stmt",
    "GroupID": 2,
    "PropertyID": 4,
    "DataTypeID": 11
  }
];


@Injectable()
export class Service {

  statements: Observable<Statement[]>;
  private _statements: ReplaySubject<Statement[]>;
  private dataStore: {
    statements: Statement[];
  };

  constructor() {
    this.dataStore = { statements: [] };
    this._statements = new ReplaySubject<Statement[]>(1);
    this.statements = this._statements.asObservable();
  }

  loadAllStatements() {
    this.dataStore.statements = statements;
    this._statements.next(Object.assign({}, this.dataStore).statements);
  }

  getstatements() {
    return statements;
  }

  getgroups() {
    return groups;
  }

  getproperties() {
    return properties;
  }

  getdatatypes() {
    return datatypes;
  }
}