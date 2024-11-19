import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensclothComponent } from './menscloth.component';

describe('MensclothComponent', () => {
  let component: MensclothComponent;
  let fixture: ComponentFixture<MensclothComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MensclothComponent]
    });
    fixture = TestBed.createComponent(MensclothComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
