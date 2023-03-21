import { Routes, Route } from "react-router-dom";
import Home from "../screens/Home";
import About from "../screens/About";
import Contact from "../screens/Contact";
import Detail from "../screens/Detail";
import Recipe from "../screens/Recipe";
import { AuthProvider } from "../config/AuthProvider";
import ProtectedRoute from "./ProtectedRoute";
import NotFound from "../screens/NotFound";
import ManageAboutUs from "../screens/ManageAboutUs";

export default function RouteFile() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="manage-recipes"
          element={
            <ProtectedRoute>
              <Recipe />
            </ProtectedRoute>
          }
        />
        <Route
          path="manage-about-us"
          element={
            <ProtectedRoute>
              <ManageAboutUs />
            </ProtectedRoute>
          }
        />
        <Route path="about-us" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="recipe/:recipeId" element={<Detail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AuthProvider>
  );
}
