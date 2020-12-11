import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  petTypes: string[] = ['Cat', 'Dog']
  petAges: string[] = ['Young', 'Adult', 'Senior']

  petName = new FormControl('')
  petType: string = this.petTypes[0]
  petAge: string = this.petAges[0]

  constructor () { }

  submit () {
    console.log(this.petAge);
  }

  ngOnInit (): void {
  }
}
