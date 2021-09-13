import AuthNavigation from "../authNavigation/AuthNavigation";
import UserMenu from "../userMenu/UserMenu";
import { getIsLoggedIn } from "../../redux/auth/auth-selectors";
import { useSelector } from "react-redux";

const AppBar = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return <header>{isLoggedIn ? <UserMenu /> : <AuthNavigation />}</header>;
};

export default AppBar;
