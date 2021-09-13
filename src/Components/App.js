import React, { useEffect, Suspense, lazy } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Switch } from "react-router-dom";
import AppBar from "./appBar/AppBar";
import Container from "./container/Container";
import authOperations from "../redux/auth/auth-operations";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import Spiner from "./spiner/Spiner";
import { getIsFetching } from "../redux/auth/auth-selectors";

const RegisterPage = lazy(() => import("../pages/RegisterPage"));
const LoginPage = lazy(() => import("../pages/LoginPage"));
const ContactsPage = lazy(() => import("../pages/ContactsPage"));

const App = () => {
  const dispatch = useDispatch();
  const isFetching = useSelector(getIsFetching);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    !isFetching && (
      <Container>
        <AppBar />

        <Switch>
          <Suspense fallback={<Spiner />}>
            <PublicRoute
              exact
              path="/register"
              restricted
              redirectTo="/contacts"
            >
              <RegisterPage />
            </PublicRoute>
            <PublicRoute exact path="/login" restricted redirectTo="/contacts">
              <LoginPage />
            </PublicRoute>
            <PrivateRoute path="/contacts" redirectTo="/login">
              <ContactsPage />
            </PrivateRoute>
          </Suspense>
        </Switch>
      </Container>
    )
  );
};

export default App;
