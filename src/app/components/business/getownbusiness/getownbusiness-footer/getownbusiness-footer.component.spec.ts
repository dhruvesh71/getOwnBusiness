import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetownbusinessFooterComponent } from './getownbusiness-footer.component';

describe('GetownbusinessFooterComponent', () => {
  let component: GetownbusinessFooterComponent;
  let fixture: ComponentFixture<GetownbusinessFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetownbusinessFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetownbusinessFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
