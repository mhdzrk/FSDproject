import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellregisterComponent } from './sellregister.component';

describe('SellregisterComponent', () => {
  let component: SellregisterComponent;
  let fixture: ComponentFixture<SellregisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellregisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
