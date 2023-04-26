import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssemblySimulationVisualizationComponent } from './assembly-simulation-visualization.component';

describe('AssemblySimulationVisualizationComponent', () => {
  let component: AssemblySimulationVisualizationComponent;
  let fixture: ComponentFixture<AssemblySimulationVisualizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssemblySimulationVisualizationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssemblySimulationVisualizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
