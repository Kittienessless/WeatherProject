import React from "react";

import "./App.css";

import { Providers } from "./providers/index.tsx";
import { AppRouter } from "./routers/index.tsx";

function App() {
  return (
    <Providers>
      <AppRouter />
    </Providers>
  );
}

export default App;
