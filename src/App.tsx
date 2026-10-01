import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { LoginPage } from "./features/auth/pages/LoginPage";
import { ProtectedRoute } from "./routes/ProtectedRoute";
import { RegisterPage } from "./features/auth/pages/RegisterPage";
import { AppLayout } from "./layouts/AppLayout";
import { DashboardPage } from "./features/dashboard/pages/DashboardPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route element={<ProtectedRoute />}>
          <Route element={<AppLayout />}>
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route
              path="/transactions"
              element={
                <section className="min-h-screen p-6 md:p-10">
                  <h1 className="font-heading text-3xl font-bold text-ink">
                    Transactions
                  </h1>
                </section>
              }
            />
            <Route
              path="/loans"
              element={
                <section className="min-h-screen p-6 md:p-10">
                  <h1 className="font-heading text-3xl font-bold text-ink">
                    Request Loan
                  </h1>
                </section>
              }
            />
          </Route>
        </Route>
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
