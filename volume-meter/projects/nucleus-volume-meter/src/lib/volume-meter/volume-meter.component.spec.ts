import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolumeMeterComponent } from './volume-meter.component';

describe('VolumeMeterComponent', () => {
  let component: VolumeMeterComponent;
  let fixture: ComponentFixture<VolumeMeterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VolumeMeterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VolumeMeterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
