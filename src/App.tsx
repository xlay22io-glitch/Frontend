import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layout from "./components/layout/Layout";
import PublicRoute from "./components/routes/PublicRoute";
// import ProtectedRoute from './components/routes/ProtectedRoute';
import Home from "./pages/Home";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import EmailSuccess from "./pages/success/EmailSuccess";
import ForgotPassword from "./pages/auth/ForgotPassword";
import ResetPassword from "./pages/auth/ResetPassword";
import ProtectedRoute from "./components/routes/ProtectedRoute";
import Account from "./pages/main/Account";
import Deposit from "./pages/main/Deposit";
import Withdraw from "./pages/main/Withdraw";
import Calculator from "./pages/main/Calculator";
import FAQ from "./pages/legal/FAQ";
import NotFound from "./pages/error/NotFound";
import MyBacks from "./pages/main/MyBacks";
import EmailSentSuccess from "./pages/success/EmailSentSuccess";
import TermsAndConditions from "./pages/legal/TermsAndConditions";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer
        position="top-center"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/faq"
          element={
            <Layout>
              <FAQ />
            </Layout>
          }
        />
        <Route
          path="*"
          element={
            <Layout>
              <NotFound />
            </Layout>
          }
        />
        <Route element={<PublicRoute />}>
          <Route
            path="/register"
            element={
              <Layout>
                <Register />
              </Layout>
            }
          />
          <Route
            path="/login"
            element={
              <Layout>
                <Login />
              </Layout>
            }
          />
          <Route
            path="/auth/verify"
            element={
              <Layout>
                <EmailSuccess />
              </Layout>
            }
          />
          <Route
            path="/forgot-password"
            element={
              <Layout>
                <ForgotPassword />
              </Layout>
            }
          />
          <Route
            path="/reset/password"
            element={
              <Layout>
                <ResetPassword />
              </Layout>
            }
          />
          <Route
            path="/reset/password/email-sent"
            element={
              <Layout>
                <EmailSentSuccess />
              </Layout>
            }
          />
        </Route>

        <Route element={<ProtectedRoute />}>
          <Route
            path="/account"
            element={
              <Layout>
                <Account />
              </Layout>
            }
          />
          <Route
            path="/deposit"
            element={
              <Layout>
                <Deposit />
              </Layout>
            }
          />
          <Route
            path="/withdraw"
            element={
              <Layout>
                <Withdraw />
              </Layout>
            }
          />
          <Route
            path="/calculator"
            element={
              <Layout>
                <Calculator />
              </Layout>
            }
          />
          <Route
            path="/my-backs"
            element={
              <Layout>
                <MyBacks />
              </Layout>
            }
          />
        </Route>
        <Route
          path="/terms-and-conditions"
          element={
            <Layout>
              <TermsAndConditions />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
