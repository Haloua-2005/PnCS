import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HuilesComponent } from './huiles.component';

describe('HuilesComponent', () => {
  let component: HuilesComponent;
  let fixture: ComponentFixture<HuilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HuilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HuilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
