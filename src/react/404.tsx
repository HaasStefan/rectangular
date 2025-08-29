import { useNgRouter } from "@rectangular/react";

export const NotFound: React.FC = () => {
  const { activatedRoute } = useNgRouter();

  activatedRoute.params.subscribe(console.log);
  
  return <div>404 - Not Found</div>;
};
