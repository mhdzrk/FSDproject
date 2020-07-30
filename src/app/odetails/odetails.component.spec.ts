import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OdetailsComponent } from './odetails.component';

describe('OdetailsComponent', () => {
  let component: OdetailsComponent;
  let fixture: ComponentFixture<OdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
