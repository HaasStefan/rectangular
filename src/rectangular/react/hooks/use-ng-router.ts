import { ActivatedRoute, Router } from '@angular/router';
import { useNgInject } from './use-ng-inject';
import { assertInNgContext } from '../utils/assert-in-ng-context';

export function useNgRouter() {
  assertInNgContext();
  
  const router = useNgInject(Router);
  const activatedRoute = useNgInject(ActivatedRoute);

  return { router, activatedRoute };
}
