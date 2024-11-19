import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectricdeviceComponent } from './electricdevice.component';

describe('ElectricdeviceComponent', () => {
  let component: ElectricdeviceComponent;
  let fixture: ComponentFixture<ElectricdeviceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ElectricdeviceComponent]
    });
    fixture = TestBed.createComponent(ElectricdeviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
