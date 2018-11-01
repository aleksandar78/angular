import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerViewFactoryComponent } from './container-view-factory.component';

describe('ContainerViewFactoryComponent', () => {
  let component: ContainerViewFactoryComponent;
  let fixture: ComponentFixture<ContainerViewFactoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContainerViewFactoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerViewFactoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
