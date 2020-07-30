import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyregisterComponent } from './buyregister.component';

describe('BuyregisterComponent', () => {
  let component: BuyregisterComponent;
  let fixture: ComponentFixture<BuyregisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyregisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
