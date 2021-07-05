import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolumeMeterAltComponent } from './volume-meter-alt.component';

describe('VolumeMeterAltComponent', () => {
  let component: VolumeMeterAltComponent;
  let fixture: ComponentFixture<VolumeMeterAltComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VolumeMeterAltComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VolumeMeterAltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
