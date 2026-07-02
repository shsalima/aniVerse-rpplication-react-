
import { createBrowserRouter } from "react-router";
// import Home from "../pages/LandingPage";
import Layout from "../components/layout/Layout";
import Anime from "../pages/Anime";
import LandingPage from "../pages/LandingPage";
import Characters from "../pages/Characters";
import CharacterDetails from "../pages/CharacterDetails";
import AnimeDetails from "../pages/AnimeDetails";
import Favorites from "../pages/Favorites";



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
  {
    path: "/anime/:id",
    element: 
    <Layout >
        <AnimeDetails/>
        
    </Layout>
  },
  {
    path: "/characters",
    element: 
    <Layout >
        <Characters/>
        
    </Layout>
  },
  {
    path: "/characters/:id",
    element: 
    <Layout >
        <CharacterDetails/>
        
    </Layout>
  },
  {
    path: "/favorites",
    element: 
    <Layout >
        <Favorites/>
        
    </Layout>
  },
 
]);

export default router;