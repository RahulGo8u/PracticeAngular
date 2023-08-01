import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RahulcomponentComponent } from './rahulcomponent.component';

describe('RahulcomponentComponent', () => {
  let component: RahulcomponentComponent;
  let fixture: ComponentFixture<RahulcomponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RahulcomponentComponent]
    });
    fixture = TestBed.createComponent(RahulcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
