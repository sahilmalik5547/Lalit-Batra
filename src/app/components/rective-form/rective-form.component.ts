import { Company } from './../../company';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rective-form',
  templateUrl: './rective-form.component.html',
  styleUrls: ['./rective-form.component.scss']
})
export class RectiveFormComponent implements OnInit {
  companies?: Company;
  constructor() {
    // this.companies(){

    // }
   }

  ngOnInit(): void {
  }

}
