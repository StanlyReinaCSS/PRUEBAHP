import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmninistrativeProductsComponent } from './admninistrative-products.component';

describe('AdmninistrativeProductsComponent', () => {
  let component: AdmninistrativeProductsComponent;
  let fixture: ComponentFixture<AdmninistrativeProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmninistrativeProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmninistrativeProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
