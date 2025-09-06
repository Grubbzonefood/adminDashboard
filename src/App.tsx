import { Routes, Route } from "react-router-dom";
import MainLayout from "./components/MainLayout";

import DashboardPage from "./pages/DashboardPage";
import OrdersPage from "./pages/OrdersPage";
import SettingsPage from "./pages/SettingsPage";
import VendorsPages from "./pages/VendorsPages";
import MenuPage from "./pages/MenuPage";
import CustomersPage from "./pages/CustomersPage";
import RidersPage from "./pages/RidersPage";
import LoginPage from "./pages/LoginPage";

const App = () => {
  return (
    <Routes>
      <Route index element={<LoginPage />} />
      <Route element={<MainLayout />}>
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/orders" element={<OrdersPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/vendors" element={<VendorsPages />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/customers" element={<CustomersPage />} />
        <Route path="/riders" element={<RidersPage />} />
      </Route>
    </Routes>
  );
};
export default App;
