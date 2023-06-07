import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { AboutUs } from "../pages/AboutUs";

const ListRoutes = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
    </Routes>
  );
};
export { ListRoutes };
