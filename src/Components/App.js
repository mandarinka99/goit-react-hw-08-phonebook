import React, { useEffect, Suspense, lazy } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Switch, Redirect } from "react-router-dom";
import AppBar from "./appBar/AppBar";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import Spiner from "./spiner/Spiner";
import { getIsFetching } from "../redux/auth/auth-selectors";
import { fetchCurrentUser } from "../redux/auth/auth-operations";

const RegisterPage = lazy(() => import("../pages/RegisterPage"));
const LoginPage = lazy(() => import("../pages/LoginPage"));
const ContactsPage = lazy(() => import("../pages/ContactsPage"));

const App = () => {
  const dispatch = useDispatch();
  const isFetching = useSelector(getIsFetching);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    !isFetching && (
      <>
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
      </>
    )
  );
};

export default App;
