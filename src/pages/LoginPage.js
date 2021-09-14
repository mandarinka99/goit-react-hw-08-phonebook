import { Button, TextField } from "@material-ui/core";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { logIn } from "../redux/auth/auth-operations";
import s from "./Pages.module.css";

const LoginPage = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
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
    dispatch(logIn({ email, password }));
    setEmail("");
    setPassword("");
  };
  return (
    <div className={s.container}>
      <h2 className={s.formTitle}>Phonebook</h2>

      <form onSubmit={handleSubmit} autoComplete="off" className={s.form}>
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
        <Button type="submit" color="primary" size="medium" variant="outlined">
          LOG IN
        </Button>
      </form>
    </div>
  );
};

export default LoginPage;
