import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeauxArtsComponent } from './beaux-arts.component';

describe('BeauxArtsComponent', () => {
  let component: BeauxArtsComponent;
  let fixture: ComponentFixture<BeauxArtsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeauxArtsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeauxArtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
