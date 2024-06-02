import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestCDRComponent } from './test-cdr.component';

describe('TestCDRComponent', () => {
  let component: TestCDRComponent;
  let fixture: ComponentFixture<TestCDRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestCDRComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestCDRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
