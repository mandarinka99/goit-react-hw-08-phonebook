import React, { useEffect, Suspense, lazy } from "react";
import { useDispatch } from "react-redux";
import { Switch } from "react-router-dom";
import AppBar from "./appBar/AppBar";
import Container from "./container/Container";
import authOperations from "../redux/auth/auth-operations";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import Spiner from "./spiner/Spiner";

const RegisterPage = lazy(() => import("../pages/RegisterPage"));
const LoginPage = lazy(() => import("../pages/LoginPage"));
const ContactsPage = lazy(() => import("../pages/RegisterPage"));

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      <AppBar />

      <Switch>
        <Suspense fallback={<Spiner />}>
          <PublicRoute exact path="/register" restricted>
            <RegisterPage />
          </PublicRoute>
          <PublicRoute exact path="/login" restricted>
            <LoginPage />
          </PublicRoute>
          <PrivateRoute path="/contacts">
            <ContactsPage />
          </PrivateRoute>
        </Suspense>
      </Switch>
    </Container>
  );
};

export default App;
