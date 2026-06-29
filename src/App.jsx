import { RouterProvider } from "react-router";

import router from "./routes/router";
import Layout from "./components/layout/Layout";
export default function App() {
  return (
    <RouterProvider router={router}>
      <Layout />
    </RouterProvider>
  );
}
