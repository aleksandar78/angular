import { Component, OnInit, ViewChildren, ViewChild, TemplateRef, ViewContainerRef, AfterViewInit, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'ag-container-view-factory',
  template: `
    <button (click)="add()">Add child component</button>
    <button (click)="remove()">Remove child component</button>
    <hr>
    <ng-template><span #span>I am the SPAN to be removed</span><br></ng-template>
    <ng-container #vc></ng-container>
  `,
  styles: [`
    span {
      display: inline-block;
      background-color: lightgrey;
      border: 1px solid gray;
      padding: 2px 5px;
      margin-bottom: 5px;
    }
  `]
})
export class ContainerViewFactoryComponent implements AfterViewInit, AfterViewChecked {

  @ViewChild(TemplateRef) template;
  @ViewChild('vc', { read: ViewContainerRef }) vc;
  @ViewChildren('span') spanElements;

  constructor() { }

  ngAfterViewInit() {
    this.add();
  }

  ngAfterViewChecked() {
    console.log(`Remain elements: ${this.spanElements.length}`);
  }

  add() {
    this.vc.createEmbeddedView(this.template);
  }

  remove() {
    this.vc.remove();
  }
}
