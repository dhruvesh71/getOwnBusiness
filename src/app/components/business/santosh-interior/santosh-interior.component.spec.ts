import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SantoshInteriorComponent } from './santosh-interior.component';

describe('SantoshInteriorComponent', () => {
  let component: SantoshInteriorComponent;
  let fixture: ComponentFixture<SantoshInteriorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SantoshInteriorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SantoshInteriorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
