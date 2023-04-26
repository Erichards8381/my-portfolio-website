import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsPaintCloneComponent } from './ms-paint-clone.component';

describe('MsPaintCloneComponent', () => {
  let component: MsPaintCloneComponent;
  let fixture: ComponentFixture<MsPaintCloneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MsPaintCloneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MsPaintCloneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
