import "./App.css";
import { Routes, Route, Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import Home from "./pages/Home/Home";
import ThemeColor from "./component/theme/ThemeColor";
import Navbar from "./component/Navigation/Navbar";
import ProjectPage from "./pages/ProjectPage";
import { get_cv } from "./redux/actions/LinkAction";
import { get_client_project } from "./redux/actions/projectAction";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(get_client_project());
    dispatch(get_cv());
  }, [dispatch]);

  const Layout = () => {
    return (
      <ThemeColor>
        <Navbar />
        <Outlet />
      </ThemeColor>
    );
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />{" "}
          <Route path="project/:slug" element={<ProjectPage />} />{" "}
        </Route>{" "}
      </Routes>{" "}
    </div>
  );
}

export default App;
