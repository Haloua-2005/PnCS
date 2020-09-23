import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphicArtComponent } from './graphic-art.component';

describe('GraphicArtComponent', () => {
  let component: GraphicArtComponent;
  let fixture: ComponentFixture<GraphicArtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphicArtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphicArtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
