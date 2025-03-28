import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./Footer";
import Breadcrumbs from "./components/Breadcrumbs"; // Importa il breadcrumb
import ResetScrollInstantly from "./components/ResetScrollInstantly"; // Importa il file
import { DataProvider } from "./DataContext";

const RootLayout = () => {
  return (
    <div>
      <DataProvider>
      <ResetScrollInstantly /> {/* Scroll all'inizio a ogni cambio pagina */}
      <Navbar />
      <div className="container mt-3">
        <Breadcrumbs />
        <Outlet />
        <Footer />
      </div>
      </DataProvider>
      
      
    </div>
  );
};

export default RootLayout;

