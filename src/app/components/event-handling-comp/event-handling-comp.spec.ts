import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EventHandlingComp } from './event-handling-comp';

describe('EventHandlingComp', () => {
  let component: EventHandlingComp;
  let fixture: ComponentFixture<EventHandlingComp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventHandlingComp],
    }).compileComponents();

    fixture = TestBed.createComponent(EventHandlingComp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
