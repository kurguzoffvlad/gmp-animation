import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GmpAnimationComponent } from './gmp-animation.component';

describe('GmpAnimationComponent', () => {
  let component: GmpAnimationComponent;
  let fixture: ComponentFixture<GmpAnimationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GmpAnimationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GmpAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
