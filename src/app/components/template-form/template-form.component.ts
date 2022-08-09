import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormGroup } from '@angular/forms';
import { from } from 'rxjs';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss']
})
export class TemplateFormComponent implements OnInit {
title="Template-Driven-Form"
onSubmit() {
  console.log(FormGroup)
}
  constructor() {

  }

  ngOnInit(): void {
  }

}
