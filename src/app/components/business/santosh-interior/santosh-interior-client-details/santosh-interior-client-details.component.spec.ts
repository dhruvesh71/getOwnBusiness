import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SantoshInteriorClientDetailsComponent } from './santosh-interior-client-details.component';

describe('SantoshInteriorClientDetailsComponent', () => {
  let component: SantoshInteriorClientDetailsComponent;
  let fixture: ComponentFixture<SantoshInteriorClientDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SantoshInteriorClientDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SantoshInteriorClientDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
