import { Injectable, signal } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class CounterService {
  readonly count = signal(0);

  increment() {
    this.count.set(this.count() + 1);
  }

  decrement() {
    this.count.set(this.count() - 1);
  }

  getCount() {
    return this.count.asReadonly();
  }
}