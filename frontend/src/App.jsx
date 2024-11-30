import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import {
  RegistrationPage,
  MyProfilePage,
  SubmitEinvoicePage,
  DownloadEinvoicePage,
} from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RegistrationPage />,
  },
  {
    path: "/my-profile",
    element: <MyProfilePage />,
  },

  {
    path: "/submit-einvoice",
    element: <SubmitEinvoicePage />,
  },

  {
    path: "/download-einvoice",
    element: <DownloadEinvoicePage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
