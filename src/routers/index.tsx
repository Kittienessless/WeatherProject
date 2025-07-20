import {
  createRoutesFromElements,
  createHashRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "../components/Layout.tsx";
import Weather from "../components/Weather.tsx";
import Start from "../components/Start.tsx";

export const AppRouter = () => {
  const routers = createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Weather />} />
      <Route path="/start" element={<Start/>} />
    </Route>
  );

 const router = createHashRouter(routers, {});

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
