import {
  createRoutesFromElements,
  createHashRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "../components/Layout";
import Weather from "../components/Weather";

export const AppRouter = () => {
  const routers = createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Weather />} />
    </Route>
  );

  const router = createHashRouter(routers, {});

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};
