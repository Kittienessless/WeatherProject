import React from "react";
import { observer } from "mobx-react-lite";
import { Outlet, ScrollRestoration } from "react-router-dom";

import Header from "./Header";

const Layout: React.FC = () => {
  return (
    <div>
      <Header />
      <body>
        <Outlet />
      </body>
      <ScrollRestoration />
    </div>
  );
};

export default observer(Layout);
