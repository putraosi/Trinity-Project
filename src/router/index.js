import { createBrowserRouter } from "react-router-dom";
import { Artists, Login, Recording, Release } from "../pages";
import { ARTITS_PATH, RECORDING_PATH, RELEASE_PATH } from "../utils";
import Private from "./Private";
import Sidebar from "./Sidebar";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: RELEASE_PATH,
    element: (
      <Private>
        <Sidebar>
          <Release />
        </Sidebar>
      </Private>
    ),
  },
  {
    path: RECORDING_PATH,
    element: (
      <Private>
        <Sidebar>
          <Recording />
        </Sidebar>
      </Private>
    ),
  },
  {
    path: ARTITS_PATH,
    element: (
      <Private>
        <Sidebar>
          <Artists />
        </Sidebar>
      </Private>
    ),
  },
]);
