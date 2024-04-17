import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import Work from "./pages/Work";
import About from "./pages/About";
import Admin from "./pages/Admin";
import Loader from "./components/Loader";
import LemmeKDetails from "./pages/Work/project-details/lemmeK";
import MushroomTrailsDetails from "./pages/Work/project-details/mushroomTrails";
import BBBDetails from "./pages/Work/project-details/bbb";
import ValentineVaultDetails from "./pages/Work/project-details/valentineVault";
import CanvasChroniclesDetails from "./pages/Work/project-details/canvasChronicles";
import IllustrationDetails from "./pages/Work/project-details/illustration";
import {
  HideLoading,
  SetPortfolioData,
  ShowLoading,
  ReloadData,
} from "./redux/rootSlice";
import Login from "./pages/Admin/Login";

function App() {
  const { loading, portfolioData, reloadData } = useSelector(
    (state) => state.root
  );
  const dispatch = useDispatch();
  const getPortfolioData = async () => {
    try {
      dispatch(ShowLoading());
      const response = await axios.get("/api/portfolio/get-portfolio-data");
      dispatch(SetPortfolioData(response.data));
      dispatch(ReloadData(false));
      dispatch(HideLoading());
    } catch (error) {
      dispatch(HideLoading());
    }
  };

  useEffect(() => {
    if (!portfolioData) {
      getPortfolioData();
    }
  }, [portfolioData]);

  useEffect(() => {
    if (reloadData) {
      getPortfolioData();
    }
  }, [reloadData]);

  return (
    <BrowserRouter>
      {loading ? <Loader /> : null}
      <Routes>
        <Route path="/" element={<Work />} />
        <Route path="/project-details/lemmeK" element={<LemmeKDetails />} />
        <Route
          path="/project-details/mushroomTrails"
          element={<MushroomTrailsDetails />}
        />
        <Route path="/project-details/bbb" element={<BBBDetails />} />
        <Route
          path="/project-details/valentineVault"
          element={<ValentineVaultDetails />}
        />
        <Route
          path="/project-details/canvasChronicles"
          element={<CanvasChroniclesDetails />}
        />
        <Route
          path="/project-details/illustrations"
          element={<IllustrationDetails />}
        />
        <Route path="/About" element={<About />} />
        <Route path="/Admin" element={<Admin />} />
        <Route path="/Admin-login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
