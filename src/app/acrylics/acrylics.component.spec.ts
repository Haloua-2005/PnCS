import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcrylicsComponent } from './acrylics.component';

describe('AcrylicsComponent', () => {
  let component: AcrylicsComponent;
  let fixture: ComponentFixture<AcrylicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcrylicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcrylicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
