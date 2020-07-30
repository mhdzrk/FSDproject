import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoperIndexComponent } from './shoper-index.component';

describe('ShoperIndexComponent', () => {
  let component: ShoperIndexComponent;
  let fixture: ComponentFixture<ShoperIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoperIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoperIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
