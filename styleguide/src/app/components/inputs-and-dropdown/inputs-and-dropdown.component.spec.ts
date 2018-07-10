import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputsAndDropdownComponent } from './inputs-and-dropdown.component';

describe('InputsAndDropdownComponent', () => {
  let component: InputsAndDropdownComponent;
  let fixture: ComponentFixture<InputsAndDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputsAndDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputsAndDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
