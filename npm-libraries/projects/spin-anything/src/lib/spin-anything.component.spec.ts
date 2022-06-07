import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpinAnythingComponent } from './spin-anything.component';

describe('SpinAnythingComponent', () => {
  let component: SpinAnythingComponent;
  let fixture: ComponentFixture<SpinAnythingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SpinAnythingComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SpinAnythingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
