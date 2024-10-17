import "./App.css";

import { Button, classCard, Stack } from "@sys42/ui";
import { cn } from "@sys42/utils";
import { useState } from "react";

import viteLogo from "/vite.svg";

import reactLogo from "./assets/react.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Stack>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <Stack className={cn(classCard, "card")}>
        <Button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </Stack>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </Stack>
  );
}

export default App;
