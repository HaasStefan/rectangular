import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  inject,
  Injector,
  input,
  NgZone,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  viewChild,
} from '@angular/core';
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { Host } from '@recatangular/react';

@Component({
  selector: 'react',
  standalone: true,
  imports: [],
  template: ` <div #container></div> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReactComponent implements OnInit, OnChanges, OnDestroy {
  component = input.required<React.FunctionComponent<any>>();
  props = input<object>({});
  container = viewChild<ElementRef>('container');
  private root: ReactDOM.Root | null = null;
  private readonly ngZone = inject(NgZone);
  private readonly injector = inject(Injector);

  ngOnInit() {
    this.ngZone.runOutsideAngular(() => {
      this.root = ReactDOM.createRoot(this.container()?.nativeElement);
      this.render();
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.root) {
      this.ngZone.runOutsideAngular(() => {
        this.render();
      });
    }
  }

  ngOnDestroy() {
    this.ngZone.runOutsideAngular(() => {
      this.root?.unmount();
    });
  }
  private render() {
    if (this.component) {
      this.root?.render(
        React.createElement(Host, {
          injector: this.injector,
          component: this.component(),
          props: this.props,
        })
      );
    }
  }
}
