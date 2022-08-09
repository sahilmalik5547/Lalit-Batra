import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  position: number;
  phone: number;
  action: string;
  ward: number;
  area: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, ward: 1, area: "jatwara", name: 'Hydrogen', phone: 1.0079, action: 'H' },
  { position: 2, ward: 2, area: "jatwara", name: 'Helium', phone: 4.0026, action: 'He' },
  { position: 3, ward: 3, area: "jatwara", name: 'Lithium', phone: 6.941, action: 'Li' },
  { position: 4, ward: 4, area: "jatwara", name: 'Beryllium', phone: 9.0122, action: 'Be' },
  { position: 5, ward: 5, area: "jatwara", name: 'Boron', phone: 10.811, action: 'B' },
  { position: 6, ward: 6, area: "jatwara", name: 'Carbon', phone: 12.0107, action: 'C' },
];

@Component({
  selector: 'app-masterdata',
  templateUrl: './masterdata.component.html',
  styleUrls: ['./masterdata.component.scss']
})
export class MasterdataComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor() { }

  ngOnInit(): void {
  }

}
