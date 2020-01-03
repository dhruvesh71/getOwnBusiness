import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SantoshInteriorFooterComponent } from './santosh-interior-footer.component';

describe('SantoshInteriorFooterComponent', () => {
  let component: SantoshInteriorFooterComponent;
  let fixture: ComponentFixture<SantoshInteriorFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SantoshInteriorFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SantoshInteriorFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
