import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ag-dom-attribute-handler',
  template: `
    <div class="container">
      <h5>Dom Attribute Handler</h5>
      <div [addAttribute]="attribute"></div>
      <button (click)="addAttribute()">Add attribute to div</button>
      <button (click)="removeAttribute()">Remove attribute to div</button>
    </div>
  `,
  styles: [`
    .container {
      border: 1px solid lightgrey;
      color: red;
      margin: 5px;
      padding 2px 5px;
    }
  `]
})
export class DomAttributeHandlerComponent implements OnInit {

  attribute: any = { name: '', value: ''};

  constructor() { }

  ngOnInit() {
  }

  addAttribute() {
    this.attribute = { name: 'data-custom', value: 'custom-value' };
  }

  removeAttribute() {
    this.attribute = { name: 'data-custom', value: '' };
  }


}
