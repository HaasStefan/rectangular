import { Component, inject } from '@angular/core';
import { CounterService } from '../services/counter.service';
import { NgHostComponent } from "../ng-host/ng-host.component";

@Component({
  selector: 'ng-counter',
  standalone: true,
  imports: [NgHostComponent],
  templateUrl: './ng-counter.component.html',
  styleUrl: './ng-counter.component.css'
})
export class NgCounterComponent {
  private counterService = inject(CounterService);

  increment() {
    this.counterService.increment();
  }

  decrement() {
    this.counterService.decrement();
  }

  get count() {
    return this.counterService.getCount();
  }
}
