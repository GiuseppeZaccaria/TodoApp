import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DettaglioTodoComponent } from './dettaglio-todo.component';

describe('DettaglioTodoComponent', () => {
  let component: DettaglioTodoComponent;
  let fixture: ComponentFixture<DettaglioTodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DettaglioTodoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DettaglioTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
