import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingoutComponent } from './singout.component';

describe('SingoutComponent', () => {
  let component: SingoutComponent;
  let fixture: ComponentFixture<SingoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
