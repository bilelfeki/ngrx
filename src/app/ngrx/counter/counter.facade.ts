import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { decrement, increment } from "../counter.actions";
import { Observable } from "rxjs";

@Injectable({
  providedIn:'root'
})
export class CounterFacade{
  count$:Observable<number>
  constructor(private store :Store<{ count: number }>){
    this.count$ = this.store.select('count');
   }
  increment(){
    this.store.dispatch(increment())
  }
  decrement(){
    this.store.dispatch(decrement())
  }
}
