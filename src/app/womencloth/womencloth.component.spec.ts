import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenclothComponent } from './womencloth.component';

describe('WomenclothComponent', () => {
  let component: WomenclothComponent;
  let fixture: ComponentFixture<WomenclothComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WomenclothComponent]
    });
    fixture = TestBed.createComponent(WomenclothComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
