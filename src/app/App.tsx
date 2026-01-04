import React from "react";
import { appRouter } from "@app/providers/router";
import { Footer } from "@widgets/Footer";
import { Header } from "@widgets/Header";

import { RouterProvider } from "react-router-dom";

export const App = () => {
  return (
    <>
      <Header />
      <main className="content">
        <RouterProvider router={appRouter} />
      </main>
      <Footer />
    </>
  );
};
