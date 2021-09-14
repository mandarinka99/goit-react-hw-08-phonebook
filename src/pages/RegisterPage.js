import { Button, Container, TextField } from "@material-ui/core";
import { useState } from "react";
import { useDispatch } from "react-redux";
import authOperations from "../redux/auth/auth-operations";
import s from "./Pages.module.css";

const RegisterPage = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case "name":
        return setName(value);
      case "email":
        return setEmail(value);
      case "password":
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(authOperations.register({ name, email, password }));
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <Container>
      <div className={s.container}>
        <h2 className={s.formTitle}>Phonebook</h2>

        <form onSubmit={handleSubmit} autoComplete="off" className={s.form}>
          <TextField
            type="name"
            name="name"
            value={name}
            onChange={handleChange}
            label="Name"
            variant="outlined"
            size="small"
            className={s.formInp}
          />

          <TextField
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            label="E-mail"
            variant="outlined"
            size="small"
            className={s.formInp}
          />

          <TextField
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            label="Password"
            variant="outlined"
            size="small"
            className={s.formInp}
          />

          <Button
            type="submit"
            color="primary"
            size="medium"
            variant="outlined"
          >
            SIGN UP
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default RegisterPage;
