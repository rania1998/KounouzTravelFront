import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateProcessInstanceComponent } from './update-process-instance.component';

describe('UpdateProcessInstanceComponent', () => {
  let component: UpdateProcessInstanceComponent;
  let fixture: ComponentFixture<UpdateProcessInstanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateProcessInstanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateProcessInstanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
