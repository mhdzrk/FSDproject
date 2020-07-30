import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sell1Component } from './sell1.component';

describe('Sell1Component', () => {
  let component: Sell1Component;
  let fixture: ComponentFixture<Sell1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sell1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sell1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
