import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SantoshInteriorWhatWeDoComponent } from './santosh-interior-what-we-do.component';

describe('SantoshInteriorWhatWeDoComponent', () => {
  let component: SantoshInteriorWhatWeDoComponent;
  let fixture: ComponentFixture<SantoshInteriorWhatWeDoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SantoshInteriorWhatWeDoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SantoshInteriorWhatWeDoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
