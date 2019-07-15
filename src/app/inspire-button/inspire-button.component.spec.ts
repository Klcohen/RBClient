import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InspireButtonComponent } from './inspire-button.component';

describe('InspireButtonComponent', () => {
  let component: InspireButtonComponent;
  let fixture: ComponentFixture<InspireButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InspireButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InspireButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
