import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoperdashboardComponent } from './shoperdashboard.component';

describe('ShoperdashboardComponent', () => {
  let component: ShoperdashboardComponent;
  let fixture: ComponentFixture<ShoperdashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoperdashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoperdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
