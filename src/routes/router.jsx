
import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import Layout from "../components/layout/Layout";
import Anime from "../pages/Anime";



const router = createBrowserRouter([
  {
    path: "/",
    element: 
    <Layout >
        <Home/>
        
    </Layout>
  },
  {
    path: "/anime",
    element: 
    <Layout >
        <Anime/>
        
    </Layout>
  },
 
]);

export default router;