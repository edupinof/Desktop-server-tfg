import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SantoComponent } from './santo.component';

describe('SantoComponent', () => {
  let component: SantoComponent;
  let fixture: ComponentFixture<SantoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SantoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SantoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
