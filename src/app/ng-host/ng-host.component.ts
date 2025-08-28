import { Component } from '@angular/core';
import { ReactComponent } from "@recatangular/angular";
import Counter from 'src/react/Counter';

@Component({
  selector: 'ng-host',
  standalone: true,
  imports: [ReactComponent],
  templateUrl: './ng-host.component.html',
  styleUrl: './ng-host.component.css'
})
export class NgHostComponent {
  readonly Counter = Counter;

}
