import { Component } from '@angular/core';
import { ReactComponent } from "@rectangular/angular";
import Counter from 'src/react/Counter';

@Component({
  selector: 'ng-host',
  standalone: true,
  imports: [],
  templateUrl: './ng-host.component.html',
  styleUrl: './ng-host.component.css'
})
export class NgHostComponent {

}
