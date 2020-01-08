import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetownbusinessComponent } from './getownbusiness.component';

describe('GetownbusinessComponent', () => {
  let component: GetownbusinessComponent;
  let fixture: ComponentFixture<GetownbusinessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetownbusinessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetownbusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
