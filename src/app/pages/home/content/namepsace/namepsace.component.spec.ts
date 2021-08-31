import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NamepsaceComponent } from './namepsace.component';

describe('NamepsaceComponent', () => {
  let component: NamepsaceComponent;
  let fixture: ComponentFixture<NamepsaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NamepsaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NamepsaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
