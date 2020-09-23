import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToilesComponent } from './toiles.component';

describe('ToilesComponent', () => {
  let component: ToilesComponent;
  let fixture: ComponentFixture<ToilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
