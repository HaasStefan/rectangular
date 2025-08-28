import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgHostComponent } from './ng-host/ng-host.component';
import { ReactComponent } from "@recatangular/angular";
import Counter from 'src/react/Counter';
import { CounterService } from './services/counter.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgHostComponent, ReactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  private readonly counterService = inject(CounterService);
  readonly Counter = Counter;

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
