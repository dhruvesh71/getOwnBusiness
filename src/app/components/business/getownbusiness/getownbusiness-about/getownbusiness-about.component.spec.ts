import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetownbusinessAboutComponent } from './getownbusiness-about.component';

describe('GetownbusinessAboutComponent', () => {
  let component: GetownbusinessAboutComponent;
  let fixture: ComponentFixture<GetownbusinessAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetownbusinessAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetownbusinessAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
