import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Layout from './components/layout/Layout';
import PublicRoute from './components/routes/PublicRoute';
// import ProtectedRoute from './components/routes/ProtectedRoute';
import Home from './pages/Home';
import Register from './pages/auth/Register';
import Login from './pages/auth/Login';
import EmailSuccess from './pages/success/EmailSuccess';
import ForgotPassword from './pages/auth/ForgotPassword';
import ResetPassword from './pages/auth/ResetPassword';
import ProtectedRoute from './components/routes/ProtectedRoute';
import Account from './pages/main/Account';

function App() {
  return (
    <BrowserRouter>
      <ToastContainer
        position='top-center'
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
          path='/'
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route element={<PublicRoute />}>
          <Route
            path='/register'
            element={
              <Layout>
                <Register />
              </Layout>
            }
          />
          <Route
            path='/login'
            element={
              <Layout>
                <Login />
              </Layout>
            }
          />
          <Route
            path='/auth/verify'
            element={
              <Layout>
                <EmailSuccess />
              </Layout>
            }
          />
          <Route
            path='/forgot-password'
            element={
              <Layout>
                <ForgotPassword />
              </Layout>
            }
          />
          <Route
            path='/auth/reset/password'
            element={
              <Layout>
                <ResetPassword />
              </Layout>
            }
          />
        </Route>

        <Route element={<ProtectedRoute />}>
          <Route
            path='/account'
            element={
              <Layout>
                <Account />
              </Layout>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
