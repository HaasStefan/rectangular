import { AngularHost, useNgRouter } from "@rectangular/react";
import { NgCounterComponent } from "src/app/ng-counter/ng-counter.component";

export const NotFound: React.FC = () => {
  const { activatedRoute } = useNgRouter();

  activatedRoute.params.subscribe(console.log);

  return (
    <>
      <div>404 - Not Found</div>
      <AngularHost selector="ng-counter" component={NgCounterComponent} />
    </>
  );
};
