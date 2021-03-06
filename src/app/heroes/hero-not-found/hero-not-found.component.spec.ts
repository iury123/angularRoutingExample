import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroNotFoundComponent } from './hero-not-found.component';

describe('HeroNotFoundComponent', () => {
  let component: HeroNotFoundComponent;
  let fixture: ComponentFixture<HeroNotFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroNotFoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
