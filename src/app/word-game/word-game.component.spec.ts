import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordGameComponent } from './word-game.component';

describe('WordGameComponent', () => {
  let component: WordGameComponent;
  let fixture: ComponentFixture<WordGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WordGameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WordGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
