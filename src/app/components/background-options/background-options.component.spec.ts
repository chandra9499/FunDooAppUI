import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackgroundOptionsComponent } from './background-options.component';

describe('BackgroundOptionsComponent', () => {
  let component: BackgroundOptionsComponent;
  let fixture: ComponentFixture<BackgroundOptionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BackgroundOptionsComponent]
    });
    fixture = TestBed.createComponent(BackgroundOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
