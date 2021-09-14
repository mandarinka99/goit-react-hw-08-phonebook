import AuthNavigation from "../authNavigation/AuthNavigation";
import UserMenu from "../userMenu/UserMenu";
import Container from "../container/Container";
import { getIsLoggedIn } from "../../redux/auth/auth-selectors";
import { useSelector } from "react-redux";
import s from "./AppBar.module.css";

const AppBar = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <header className={s.header}>
      <Container>{isLoggedIn ? <UserMenu /> : <AuthNavigation />}</Container>
    </header>
  );
};

export default AppBar;
