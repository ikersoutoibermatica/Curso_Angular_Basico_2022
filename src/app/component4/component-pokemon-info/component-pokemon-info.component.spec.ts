import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentPokemonInfoComponent } from './component-pokemon-info.component';

describe('ComponentPokemonInfoComponent', () => {
  let component: ComponentPokemonInfoComponent;
  let fixture: ComponentFixture<ComponentPokemonInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentPokemonInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentPokemonInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
