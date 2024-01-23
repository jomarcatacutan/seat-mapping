import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeatMappingComponent } from './seat-mapping.component';

describe('SeatMappingComponent', () => {
  let component: SeatMappingComponent;
  let fixture: ComponentFixture<SeatMappingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeatMappingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeatMappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
