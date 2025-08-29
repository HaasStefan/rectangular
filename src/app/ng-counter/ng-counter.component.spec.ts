import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgCounterComponent } from './ng-counter.component';

describe('NgCounterComponent', () => {
  let component: NgCounterComponent;
  let fixture: ComponentFixture<NgCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgCounterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
