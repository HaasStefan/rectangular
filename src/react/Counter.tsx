import React from "react";
import { ReactHost } from "./ReactHost";
import { CounterService } from "src/app/services/counter.service";
import { useNgInject, useNgSignal } from "@rectangular/react";

const Counter: React.FC = () => {
  const counterService = useNgInject(CounterService);
  const [count, setCount] = useNgSignal(counterService.count);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <ReactHost>
      <div>
        <div>Counter: {count}</div>
        <div>
          <button onClick={decrement}>-</button>
          <button onClick={increment}>+</button>
          <button>empty</button>
        </div>
      </div>
    </ReactHost>
  );
};

export default Counter;
