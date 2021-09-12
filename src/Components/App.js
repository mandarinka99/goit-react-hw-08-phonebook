import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router";
import ContactsPage from "../pages/ContactsPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import AppBar from "./appBar/AppBar";
import Container from "./container/Container";
import authOperations from '../redux/auth/auth-operations';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser())
  }, [dispatch])
  return (
    <Container>
      <AppBar/>

      <Switch>
      <Route exact path="/register" component={RegisterPage}/>
      <Route exact path="/login" component={LoginPage}/>
      <Route exact path="/contacts" component={ContactsPage}/>

      </Switch>
      </Container>
  );
}

export default App;

