import { Directive, Input, ElementRef, Renderer2, OnChanges } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[addAttribute]'
})
export class AttributeHandlerDirective implements OnChanges {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  @Input() addAttribute = { name: '', value: '' };

  ngOnChanges() {
    this.handleAttribute(this.addAttribute);
  }

  handleAttribute(attr: {name: string; value: string}) {
    const span = this.renderer.createElement('span');
    const text = this.renderer.createText(`Has attribute: ${attr.name} with value: ${attr.value}`);
    this.renderer.appendChild(span, text);
    console.log(`New attribute: ${attr.name}`);
    if (!!attr.name && attr.name.length > 0) {
      if (!!attr.value && attr.value.length > 0) {
        this.renderer.setAttribute(this.elementRef.nativeElement, attr.name, attr.value);
        this.renderer.appendChild(this.elementRef.nativeElement, span);
      } else {
        // TODO: remove child node
        this.renderer.removeAttribute(this.elementRef.nativeElement, attr.name);
      }
    }
  }
}
