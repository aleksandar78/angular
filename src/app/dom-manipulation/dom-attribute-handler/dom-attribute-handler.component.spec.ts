import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DomAttributeHandlerComponent } from './dom-attribute-handler.component';

describe('DomAttributeHandlerComponent', () => {
  let component: DomAttributeHandlerComponent;
  let fixture: ComponentFixture<DomAttributeHandlerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DomAttributeHandlerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DomAttributeHandlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
