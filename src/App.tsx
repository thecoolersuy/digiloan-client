import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { LoginPage } from "./features/auth/pages/LoginPage";
import { ProtectedRoute } from "./routes/ProtectedRoute";
import { RegisterPage } from "./features/auth/pages/RegisterPage";
import { AppLayout } from "./layouts/AppLayout";
import NotFoundPage from "./components/NotFoundPage";
import { lazy } from "react";

const DashboardPage = lazy(() =>
  import("./features/dashboard/pages/DashboardPage").then((m) => ({
    default: m.DashboardPage,
  })),
);

const TransactionsPage = lazy(() =>
  import("./features/transactions/pages/TransactionPage").then((m) => ({
    default: m.TransactionsPage,
  })),
);

const RequestLoanPage = lazy(() =>
  import("./features/loans/pages/RequestLoanPage").then((m) => ({
    default: m.RequestLoanPage,
  })),
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route element={<ProtectedRoute />}>
          <Route element={<AppLayout />}>
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/transactions" element={<TransactionsPage />} />
            <Route path="/loans" element={<RequestLoanPage />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
