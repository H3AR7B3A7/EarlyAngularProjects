import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteCarsComponent } from './favorite-cars.component';

describe('FavoriteCarsComponent', () => {
  let component: FavoriteCarsComponent;
  let fixture: ComponentFixture<FavoriteCarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoriteCarsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriteCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
