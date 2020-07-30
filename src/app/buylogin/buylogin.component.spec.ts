import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyloginComponent } from './buylogin.component';

describe('BuyloginComponent', () => {
  let component: BuyloginComponent;
  let fixture: ComponentFixture<BuyloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
