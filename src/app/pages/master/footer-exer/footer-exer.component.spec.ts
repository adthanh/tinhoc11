import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterExerComponent } from './footer-exer.component';

describe('FooterExerComponent', () => {
  let component: FooterExerComponent;
  let fixture: ComponentFixture<FooterExerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterExerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterExerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
