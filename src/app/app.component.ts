import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgHostComponent } from './ng-host/ng-host.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgHostComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'rectangular';
}
