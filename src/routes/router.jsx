
import { createBrowserRouter } from "react-router";
// import Home from "../pages/LandingPage";
import Layout from "../components/layout/Layout";
import Anime from "../pages/Anime";
import LandingPage from "../pages/LandingPage";



const router = createBrowserRouter([
  {
    path: "/",
    element: 
    <Layout >
        <LandingPage/>
        
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