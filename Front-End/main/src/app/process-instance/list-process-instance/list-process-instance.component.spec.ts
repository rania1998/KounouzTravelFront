import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProcessInstanceComponent } from './list-process-instance.component';

describe('ListProcessInstanceComponent', () => {
  let component: ListProcessInstanceComponent;
  let fixture: ComponentFixture<ListProcessInstanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListProcessInstanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListProcessInstanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
