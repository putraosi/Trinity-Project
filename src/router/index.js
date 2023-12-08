import { createBrowserRouter } from "react-router-dom";
import {
  Artists,
  Composers,
  Label,
  Login,
  Persons,
  Publishers,
  Recording,
  Release,
} from "../pages";
import {
  ARTITS_PATH,
  COMPOSERS_PATH,
  LABEL_PATH,
  PERSONS_PATH,
  PUBLISHERS_PATH,
  RECORDING_PATH,
  RELEASE_PATH,
} from "../utils";
import Sidebar from "./Sidebar";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: RELEASE_PATH,
    element: (
      <Sidebar>
        <Release />
      </Sidebar>
    ),
  },
  {
    path: RECORDING_PATH,
    element: (
      <Sidebar>
        <Recording />
      </Sidebar>
    ),
  },
  {
    path: ARTITS_PATH,
    element: (
      <Sidebar>
        <Artists />
      </Sidebar>
    ),
  },
  {
    path: PERSONS_PATH,
    element: (
      <Sidebar>
        <Persons />
      </Sidebar>
    ),
  },
  {
    path: COMPOSERS_PATH,
    element: (
      <Sidebar>
        <Composers />
      </Sidebar>
    ),
  },
  {
    path: LABEL_PATH,
    element: (
      <Sidebar>
        <Label />
      </Sidebar>
    ),
  },
  {
    path: PUBLISHERS_PATH,
    element: (
      <Sidebar>
        <Publishers />
      </Sidebar>
    ),
  },
]);
