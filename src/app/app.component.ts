import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
// import { NgHostComponent } from './ng-host/ng-host.component';
// import { ReactComponent } from "@rectangular/angular";
// import Counter from 'src/react/Counter';
import { CounterService } from './services/counter.service';
import { NgCounterComponent } from "./ng-counter/ng-counter.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, NgCounterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  private readonly counterService = inject(CounterService);
  // readonly Counter = Counter;

  readonly count = this.counterService.getCount();

  ngOnChanges() {
    console.log("AppComponent ngOnChanges");
  }

  increment() {
    this.counterService.increment();
  }

  decrement() {
    this.counterService.decrement();
  }
}
