import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProcessInstanceComponent } from './add-process-instance.component';

describe('AddProcessInstanceComponent', () => {
  let component: AddProcessInstanceComponent;
  let fixture: ComponentFixture<AddProcessInstanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProcessInstanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProcessInstanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
