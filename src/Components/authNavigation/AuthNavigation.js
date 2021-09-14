import { Button } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import s from "./AuthNavigation.module.css";

const AuthNavigation = () => {
  return (
    <nav className={s.nav}>
      <NavLink
        to="/register"
        className={s.navLink}
        activeClassName={s.activeLink}
      >
        Register
      </NavLink>

      <NavLink to="/login" className={s.navLink} activeClassName={s.activeLink}>
        Login
      </NavLink>
    </nav>
  );
};

export default AuthNavigation;
