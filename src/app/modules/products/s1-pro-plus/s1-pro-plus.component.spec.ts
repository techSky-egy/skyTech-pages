import { ComponentFixture, TestBed } from '@angular/core/testing';

import { S1ProPlusComponent } from './s1-pro-plus.component';

describe('S1ProPlusComponent', () => {
  let component: S1ProPlusComponent;
  let fixture: ComponentFixture<S1ProPlusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [S1ProPlusComponent]
    });
    fixture = TestBed.createComponent(S1ProPlusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
