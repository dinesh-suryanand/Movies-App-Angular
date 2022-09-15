import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenereComponent } from './genere.component';

describe('GenereComponent', () => {
  let component: GenereComponent;
  let fixture: ComponentFixture<GenereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenereComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
