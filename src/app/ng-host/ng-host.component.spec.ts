import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgHostComponent } from './ng-host.component';

describe('NgHostComponent', () => {
  let component: NgHostComponent;
  let fixture: ComponentFixture<NgHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgHostComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
