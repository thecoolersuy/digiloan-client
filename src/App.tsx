import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { LoginPage } from "./features/auth/pages/LoginPage";
import { ProtectedRoute } from "./routes/ProtectedRoute";
import { RegisterPage } from "./features/auth/pages/RegisterPage";
import { AppLayout } from "./layouts/AppLayout";
import { DashboardPage } from "./features/dashboard/pages/DashboardPage";
import TransactionPage from "./features/transactions/pages/TransactionPage";
import RequestLoanPage from "./features/loans/pages/RequestLoanPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route element={<ProtectedRoute />}>
          <Route element={<AppLayout />}>
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/transactions" element={<TransactionPage />} />
            <Route path="/loans" element={<RequestLoanPage />} />
          </Route>
        </Route>
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
