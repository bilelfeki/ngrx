import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { decrement, increment } from '../counter.actions';
import { CounterFacade } from './counter.facade';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
})
export class CounterComponent {
  count$: Observable<number>;
  constructor(private counterFacade:CounterFacade) {
    this.count$=counterFacade.count$
  }
  increment() {
    this.counterFacade.increment()
  }
  decrement() {
    this.counterFacade.decrement()
  }
}
