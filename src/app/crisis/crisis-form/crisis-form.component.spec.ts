import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrisisFormComponent } from './crisis-form.component';

describe('CrisisFormComponent', () => {
  let component: CrisisFormComponent;
  let fixture: ComponentFixture<CrisisFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrisisFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrisisFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
