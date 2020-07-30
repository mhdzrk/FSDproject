import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellloginComponent } from './selllogin.component';

describe('SellloginComponent', () => {
  let component: SellloginComponent;
  let fixture: ComponentFixture<SellloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
